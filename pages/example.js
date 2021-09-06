import {
  AlternateButton,
  PrimaryButton,
  SecondaryButton
} from '../components/Buttons';
import Card from '../components/Card';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';

function Example() {
  return (
    <>
      <Navbar />

      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <AlternateButton>Alternate Button</AlternateButton>

      <Card p="1rem">This is Card</Card>

      <Footer />
    </>
  );
}

export default Example;
