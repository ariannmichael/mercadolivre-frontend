import React from 'react'
import { Container, Row, Panel, Column, Gallery, Section, Description } from './style'
import tShirtImage from '../../assets/tshirt.png';

const Product = () => {
    return (
        <Container>
            <Row>
                <a href="#">Compartilhar</a>
                <a href="#">Vender um igual</a>
            </Row>

            <Panel>
                <Column>
                    <Gallery>
                        <img src={tShirtImage} alt="T-shirt"/>
                        <Info/>
                    </Gallery>
                </Column>
                <Column>
                    {/* <ProductAction/>
                    <SellerInfo/> */}

                    <WarrantySection/>
                    <WarrantySection/>
                    <WarrantySection/>
                </Column>
            </Panel>
        </Container>
    )
}

const WarrantySection = () => (
    <Section>
        <h4>Garantia</h4>

        <div>
            <span>
                <p className="title">Compra garantida com lorem ipsum</p>
                <p className="description">Receba o produto que está esperando ou devolvemos seu dinheiro</p>
            </span>
            <span>
                <p className="title">Garantia do vendedor</p>
                <p className="description">Sem garantia</p>
            </span>
        </div>
    </Section>
);

const Info = () => (
    <Description>
        <h2>Descrição</h2>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui elit, tempus eget imperdiet vel, dictum ac dui. Sed convallis diam et massa convallis, fermentum porttitor orci rhoncus. Nullam tempus bibendum nibh, vel ornare justo varius sed. Pellentesque eu ipsum quis tortor dictum euismod. Ut finibus, nibh fermentum rutrum condimentum, orci nisi facilisis elit, in aliquam dolor ante nec felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis non viverra ipsum, eget molestie est. Nam pellentesque lobortis dui sit amet porttitor.

Integer eros ante, sollicitudin nec commodo quis, efficitur eget turpis. Quisque pharetra maximus lobortis. Praesent vel euismod lacus. Pellentesque velit purus, auctor quis odio quis, volutpat placerat felis. Nam augue libero, congue id ex scelerisque, consequat tincidunt ipsum. Nulla sit amet volutpat quam. Curabitur volutpat orci eget erat elementum, sed laoreet sapien tristique. Nulla facilisi.
        </p>
    </Description>
)

export default Product
