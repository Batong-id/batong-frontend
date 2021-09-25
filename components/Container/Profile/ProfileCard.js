import { Image } from '@chakra-ui/image';
import { Text } from '@chakra-ui/layout';
import { useRouter } from 'next/dist/client/router';

import { AlternateButton } from '../../Buttons';
import Card from '../../Card';

const ProfileCard = () => {
  const router = useRouter();
  const onEditProfile = () => router.push('/profile/editProfile');
  return (
    <Card
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h={{ lg: '340px' }}
      w={{ lg: '280px' }}
    >
      <Image
        src="/images/logo-batong.png"
        w={{ lg: '140px' }}
        h={{ lg: '140px' }}
      />
      <Text mt={{ lg: '10px' }} fontSize="24px" fontWeight="bold">
        Batong.id
      </Text>
      <AlternateButton mt={{ lg: '20px' }} w="240px" onClick={onEditProfile}>
        Edit Profil
      </AlternateButton>
    </Card>
  );
};

export default ProfileCard;
