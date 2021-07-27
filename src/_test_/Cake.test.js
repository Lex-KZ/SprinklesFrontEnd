import Cake from '../components/Cake';
import { render, screen } from '@testing-library/react'
import { StaticRouter } from 'react-router-dom';

describe('Cake Page', () => {
    it('Should render one cake', () => {
        const cake = { id: 1, name: 'cake-1', price: 2.22};

        render(<StaticRouter><Cake cake={cake}/></StaticRouter>);
        const page = screen.getByTestId('indiv-cake');
        expect(page).toHaveTextContent(/cake-1/);
    });
});
