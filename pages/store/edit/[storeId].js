import { Skeleton } from '@chakra-ui/skeleton';
import { useRouter } from 'next/router';

import EditStore from '../../../components/Container/Store/EditStore';

export default function EditStorePage() {
  const router = useRouter();
  const storeId = router.query.storeId;

  return storeId !== undefined ? (
    <Skeleton isLoaded={true}>
      <EditStore storeId={storeId} />;
    </Skeleton>
  ) : (
    <Skeleton isLoaded={false}>
      <EditStore storeId={storeId} />;
    </Skeleton>
  );
}
