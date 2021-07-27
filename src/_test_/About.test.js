import About from '../components/About';
import { render, screen } from '@testing-library/react'
import { StaticRouter } from 'react-router-dom';

describe('About', () => {
    it('should show "About Us', () => {
        render(<StaticRouter><About/></StaticRouter>);
        const text = screen.getByText(/About Us/);
        expect(text).toBeInTheDocument();
    })
})