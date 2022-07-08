import React from 'react';
import { Container } from "./style"

const Layout: React.FC = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  );
}

export default Layout;