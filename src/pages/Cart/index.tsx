import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import * as S from "./styles";
import { InputText } from "@/components/InputText";
import { Radio } from "@/components/RadioButton";

export function Cart() {
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

            {/*  {errors.paymentMethod ? (
              <PaymentErrorMessage role="alert">
                {errors.paymentMethod.message}
              </PaymentErrorMessage>
            ) : null} */}
          </S.PaymentOptions>
        </S.AddressContainer>
      </div>

      <div>
        <p className="cartContainerTitle">Cafés selecionados</p>
        <S.OrderContainer>
        </S.OrderContainer>
      </div>
    </S.CartContainer>
  )
}