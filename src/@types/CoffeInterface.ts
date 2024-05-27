export interface CoffeProps {
  id: string,
  tags: string[],
  image: string,
  title: string,
  description: string,
  price: number,
}

export interface CoffeMarketProps extends CoffeProps {
  quantity: number;
}
