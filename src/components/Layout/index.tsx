import React from 'react'
import Product from '../Product'
import { Container, Wrapper } from './style'

const Layout: React.FC = () => {
    return (
        <Container>
            {/* <Header/> */}
            <Wrapper>
                <Product/>
            </Wrapper>

            {/* <Footer/> */}
        </Container>
    )
}

export default Layout
