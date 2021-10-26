import { Flex, HStack, Text } from '@chakra-ui/layout';
import { default as FormData } from 'form-data';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';

import { productApi } from '../../../_api/service';
import { AlternateButton, PrimaryButton } from '../../Buttons';
import Card from '../../Card';
import { CardTitle } from '../../Title';
import { SectionTitle } from '../../Title';
import { ErrorToast, SuccessToast } from '../../Toast';
import { HargaProduk, InformasiProduk } from './AddProductComponent';

const AddProduct = () => {
  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors, isSubmitting }
  // } = useForm();

  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(null)
  // const [message, setMessage] = useState(null)

  const IMAGE_DESC = [
    { id: 0, label: 'Foto Utama' },
    { id: 1, label: 'Foto 1' },
    { id: 2, label: 'Foto 2' },
    { id: 3, label: 'Foto 3' },
    { id: 4, label: 'Foto 4' }
  ];

  const handleProductPictures = (event) => {
    setFiles([...files, event.target.files[0]]);
  };

  // function getFile() {
  //   document.getElementById("upfile").click;
  // }

  const formData = new FormData();

  const router = useRouter();
  const [status, setStatus] = useState('Ready Stock');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [files, setFiles] = useState([]);
  // const [dataStore, setDataStore] = useState();
  // const [isLoaded, setIsLoaded] = useState(false);

  // const onDrop = useCallback((acceptedFiles) => {
  //   const file = acceptedFiles?.[0]
  //   console.log("file accepted", file)
  //   if (!file) {
  //     return
  //   }
  //   setIsLoading(true)
  //   setError(null)
  //   setMessage(null)
  //   try {
  //     setFiles([...files, file])
  //   } catch (e) {
  //     setIsLoading(false)
  //     setError(e)
  //     return
  //   }
  //   setIsLoading(false)
  //   setMessage('File was uploaded 👍')
  // }, [])
  // const { getRootProps, getInputProps } = useDropzone({ onDrop })

  async function onSubmit() {
    try {
      formData.append('status', status);
      formData.append('name', name);
      formData.append('category', category);
      formData.append('desc', desc);
      formData.append('quantity', quantity);
      formData.append('price', price);
      formData.append('productsPictures', files);

      const data = await productApi.addProduct(formData);
      SuccessToast(`Berhasil menambahkan produk ${data.product.name}`);
      setTimeout(() => {
        // router.push('/store');
      }, 2000);
    } catch (error) {
      if (error.message.includes('400')) {
        ErrorToast(`Produk gagal ditambahkan 😟`);
      }
      setTimeout(() => {
        router.push('/product/add');
      }, 2000);
    }
  }

  return (
    <Flex w="100vw" h="2500px">
      <Flex flexDir="column" mx="auto" mt="100px" w={{ lg: '90vw' }} h="100%">
        <SectionTitle>Tambah Produk</SectionTitle>
        <InformasiProduk
          setStatus={setStatus}
          setName={setName}
          setCategory={setCategory}
          setDesc={setDesc}
        />

        <Card h={{ lg: '400px' }} mt={{ lg: '80px' }}>
          <CardTitle mt={{ lg: '60px' }} maxW={{ lg: '300px' }}>
            Unggah produk
          </CardTitle>
          <HStack ml={{ lg: '80px' }} mt="20px" spacing="30px">
            <Flex
              flexDir="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              maxW={{ lg: '250px' }}
              mr="30px"
            >
              <Text fontSize="21px" color="#000000">
                Foto Produk
              </Text>
              <Text fontSize="18px" color="#7B849A">
                Format gambar.jpg.png.jpeg dan ukuran minimum 300x300 (untuk
                gambar optimal gunakan ukuran minimun 700x700)
              </Text>
            </Flex>

            {IMAGE_DESC.map((photo) => (
              <input
                key={photo.id}
                type="file"
                onChange={handleProductPictures}
                id="upfile"
              />
              // <UploadButton
              //   key={photo.id}
              //   boxSize={{ lg: '150px' }}

              // >
              //   <Flex flexDir="column" justifyContent="center" alignItems="center" >
              //    <input type="file" onChange={handleProductPictures} id="upfile" />

              //     {isLoading ? (
              //       <Spinner />) : (
              //       <>
              //         <Image src="/images/icon-upload-photos.png" boxSize={{ lg: "48px" }} />
              //         <Text fontSize="12px" mt="10px">{photo.label}</Text>
              //       </>

              //     )}

              //   </Flex>
              // </UploadButton>
            ))}
          </HStack>
        </Card>

        <HargaProduk setPrice={setPrice} setQuantity={setQuantity} />

        <Flex
          mt="100px"
          w={{ lg: '400px' }}
          justifyContent="space-around"
          alignItems="center"
          flexDir="row"
          alignSelf="flex-end"
        >
          <PrimaryButton minW="150px" onClick={onSubmit} type="submit">
            Simpan
          </PrimaryButton>
          <AlternateButton minW="150px">Batal</AlternateButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AddProduct;