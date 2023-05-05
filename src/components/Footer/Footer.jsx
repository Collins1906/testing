
import { MDBFooter } from 'mdb-react-ui-kit';
import './Footer.scss'

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left padding'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='#'>
          SD Cooperation
        </a>
      </div>
    </MDBFooter>
  );
}