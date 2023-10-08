import { toast } from 'react-toastify';
const passwordValidation = (password, confirmPassword) => {
    let passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/;
    if (password !== confirmPassword) {
        toast.warning('Passwords do not match');
        return false;
    } else if (password.length < 6) {
        toast.warning('Passwords must be at least 6 characters long');
        return false;
    } else if (!/[A-Z]/.test(password)) {
        toast.warning('Password must contain at least one uppercase letter');
        return false;
    } else if (!passwordRegex.test(password)) {
        toast.warning('Password must contain at least one special character');
        return false;
    }else{
        return true;
    }
}
export default passwordValidation;