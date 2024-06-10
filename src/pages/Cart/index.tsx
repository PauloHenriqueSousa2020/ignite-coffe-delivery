import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import * as S from "./styles";
import { InputText } from "@/components/InputText";
import { Radio } from "@/components/RadioButton";
import { Fragment, useContext } from 'react'
import { CoffeContext } from "@/context/CoffeContext";
import { coffees } from "../../data.json";

export function Cart() {
  const { coffes, removeItem } = useContext(CoffeContext)
  const shippingPrice = 3.5

  const coffeesInCart = coffes.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  function handleItemRemove(itemId: string) {
    removeItem(itemId)
  }

  return (
    <S.CartContainer>
      <div className="addressContent">
        <p className="cartContainerTitle">Complete seu pedido</p>
        <S.AddressContainer>
          <div className="addressInfoText">
            <MapPinLine size={22} />
            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <S.AddressMain>
            <InputText
              containerProps={{ style: { gridArea: 'cep' } }}
              placeholder="CEP"
              name="cep"
              type="text"
            />
            <InputText
              containerProps={{ style: { gridArea: 'street' } }}
              placeholder="Rua"
              name="street"
              type="text"
            />
            <InputText
              containerProps={{ style: { gridArea: 'number' } }}
              placeholder="Número"
              name="number"
              type="text"
            />
            <InputText
              containerProps={{ style: { gridArea: 'complement' } }}
              placeholder="Complemento"
              name="complement"
              type="text"
              optional
            />
            <InputText
              containerProps={{ style: { gridArea: 'district' } }}
              placeholder="Bairro"
              name="district"
              type="text"
            />
            <InputText
              containerProps={{ style: { gridArea: 'city' } }}
              placeholder="Cidade"
              name="city"
              type="text"
            />
            <InputText
              containerProps={{ style: { gridArea: 'state' } }}
              placeholder="UF"
              name="state"
              type="text"
              maxLength={2}
            />
          </S.AddressMain>
        </S.AddressContainer>
        <S.AddressContainer>
          <S.PaymentHeader>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>

              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar
              </p>
            </div>
          </S.PaymentHeader>
          <S.PaymentOptions>
            <div>
              <Radio
                isSelected={true}
                value="credit"
              >
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </Radio>

              <Radio
                isSelected={false}
                value="debit"
              >
                <Bank size={16} />
                <span>Cartão de débito</span>
              </Radio>

              <Radio
                isSelected={false}
                value="cash"
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </div>
          </S.PaymentOptions>
        </S.AddressContainer>
      </div>

      <div>
        <p className="cartContainerTitle">Cafés selecionados</p>
        <S.CartTotal>
          {coffeesInCart.map((coffee) => (
            <Fragment key={coffee.id}>
              <S.Coffee>
                <div>
                  <img src={coffee.image} alt={coffee.title} />

                  <div>
                    <span>{coffee.title}</span>

                    <S.CoffeeInfo>
                      {/* <QuantityInput
                        quantity={coffee.quantity}
                        incrementQuantity={() => handleItemIncrement(coffee.id)}
                        decrementQuantity={() => handleItemDecrement(coffee.id)}
                      /> */}

                      <button onClick={() => handleItemRemove(coffee.id)}>
                        <Trash />
                        <span>Remover</span>
                      </button>
                    </S.CoffeeInfo>
                  </div>
                </div>

                <aside>R$ {coffee.price?.toFixed(2)}</aside>
              </S.Coffee>

              <span />
            </Fragment>
          ))}

          <S.CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </div>

            <div>
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice + shippingPrice)}
              </span>
            </div>
          </S.CartTotalInfo>

          <S.CheckoutButton type="submit" form="order">
            Confirmar pedido
          </S.CheckoutButton>
        </S.CartTotal>
      </div>
    </S.CartContainer>
  )
}