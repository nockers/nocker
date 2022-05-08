export class Database {
  constructor(protected indexedDB?: IDBDatabase) {}

  protected onUpgradeneeded(request: IDBOpenDBRequest) {}

  protected onBlocked(request: IDBOpenDBRequest) {}

  protected onSuccess(request: IDBOpenDBRequest) {}

  protected putRecord<T>(name: string, data: T) {
    return this.createTransaction(name, (store) => {
      return store.put(data)
    })
  }

  protected getRecord<T>(name: string, key: string) {
    return this.createTransaction<T>(name, (store) => {
      return store.get(key)
    })
  }

  protected deleteRecord(name: string, key: string) {
    return this.createTransaction(name, (store) => {
      return store.delete(key)
    })
  }

  private async createTransaction<T>(
    name: string,
    toRequest: (store: IDBObjectStore) => IDBRequest
  ) {
    const idb = await this.openDatabase("knocker", 1)
    const transaction = idb.transaction(name, "readwrite")
    const store = transaction.objectStore(name)
    return new Promise<T | null>((resolve, reject) => {
      const request = toRequest(store)
      request.onsuccess = () => {
        resolve(request.result ?? null)
        idb.close()
      }
      request.onerror = () => {
        reject(request.error)
        idb.close()
      }
    })
  }

  private openDatabase(name: string, version: number) {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open(name, version)
      request.onupgradeneeded = () => {
        this.onUpgradeneeded(request)
      }
      request.onblocked = () => {
        this.onBlocked(request)
      }
      request.onsuccess = () => {
        this.onSuccess(request)
        resolve(request.result)
      }
      request.onerror = () => {
        reject(request.error)
      }
    })
  }

  protected deleteDatabase(name: string) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.deleteDatabase(name)
      request.onsuccess = () => {
        resolve(null)
      }
      request.onerror = () => {
        reject(request.error)
      }
    })
  }
}
