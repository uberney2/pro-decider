export class PortfolioNameEmpty extends Error {
  constructor() {
    super(`Portfolio Name cannot be empty value`);
  }
}
