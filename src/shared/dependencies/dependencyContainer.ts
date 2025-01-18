class DependencyContainer {
  //1. Make our container
  private dependencyContainer: Map<string, unknown>;
  constructor() {
    this.dependencyContainer = new Map();
  }
  //2. register dependency in the container if not exist already
  public registerDependency<T>(name: string, type: T) {
    if (!this.dependencyContainer.has(name)) {
      this.dependencyContainer.set(name, type);
    }
  }

  //3. return the registered dependency

  public getDependency<T>(name: string): T {
    if (!this.dependencyContainer.has(name)) {
      throw new Error(`Dependency ${name} is not found!`);
    }

    return this.dependencyContainer.get(name) as T;
  }
}

export const dependencyContainer = new DependencyContainer();
