import {
  AlternateButton,
  PrimaryButton,
  SecondaryButton
} from '../components/Buttons';
import Card from '../components/Card';

function Example() {
  return (
    <>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <AlternateButton>Alternate Button</AlternateButton>

      <Card p="1rem">This is Card</Card>
    </>
  );
}

export default Example;
