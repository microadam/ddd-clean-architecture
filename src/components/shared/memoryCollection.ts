export class MemoryCollection<T extends { id: string }> {
  private data: T[] = []

  private findIndexById(id: string) {
    return this.data.findIndex((d) => d.id === id)
  }

  findById(id: string): T {
    return this.data[this.findIndexById(id)]
  }

  insertOne(props: T) {
    this.data.push(props)
  }

  update(props: T) {
    this.data[this.findIndexById(props.id)] = props
  }

  delete(props: T) {
    this.data.splice(this.findIndexById(props.id), 1)
  }
}
