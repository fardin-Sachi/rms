class Container {
  private services = new Map();

  register<T>(
    token: string,

    service: T,
  ) {
    this.services.set(
      token,

      service,
    );
  }

  resolve<T>(token: string): T {
    return this.services.get(token);
  }
}

export const container = new Container();
