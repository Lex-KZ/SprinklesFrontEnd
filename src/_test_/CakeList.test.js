import CakeList from '../components/CakeList';
import { render, screen } from '@testing-library/react'
import { StaticRouter } from 'react-router-dom';

describe('CakeList', () => {
    it('should show "loading...', () => {
        render(<StaticRouter><CakeList/></StaticRouter>);
        const text = screen.getByText(/Loading/);
        expect(text).toBeInTheDocument();
    })


    it('should show cakes', () => {
        const cakes = [
            { id: 1, name: 'cake-1', price: 2.22},
            { id: 2, name: 'cake-2', price: 2.22},
            { id: 3, name: 'cake-3', price: 2.22},
        ];
         
        render(<StaticRouter><CakeList cakes={cakes}/></StaticRouter>);
        const grid = screen.getByTestId('cake-card');
        expect(grid).toHaveTextContent(/cake-1/);
        expect(grid).toHaveTextContent(/cake-2/);
        expect(grid).toHaveTextContent(/cake-3/);
    });
});