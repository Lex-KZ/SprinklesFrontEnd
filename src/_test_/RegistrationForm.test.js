import RegistrationForm from '../components/RegistrationForm';
import { render, fireEvent, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';

describe('Registration Form', () => {
    it('input field should change', () => {
        render(<StaticRouter><RegistrationForm/></StaticRouter>);
        const field = screen.getByTestId('email');
        
        fireEvent.change(field, {
            target: {
                value: "example@example.com"
            }
        });
        expect(field.value).toBe("example@example.com")
    });
});
