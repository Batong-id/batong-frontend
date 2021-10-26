import { Grid, GridItem, HStack, Text } from '@chakra-ui/layout';
import { FormControl, Radio, RadioGroup } from '@chakra-ui/react';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { Select } from '@chakra-ui/select';
import { Textarea } from '@chakra-ui/textarea';

import Card from '../../Card';
import { CardTitle } from '../../Title';
const COLOR = 'primary.brown1';

export const InformasiProduk = ({
  setStatus,
  setName,
  setCategory,
  setDesc
}) => {
  return (
    <Card h={{ lg: '530px' }} mt={{ lg: '80px' }}>
      <CardTitle mt={{ lg: '60px' }}>Informasi Produk</CardTitle>
      <HStack ml={{ lg: '80px' }} mt="20px" spacing="100px">
        <Grid
          w="90%"
          h="200px"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={1} mb="8px">
            <Text fontSize="18px" color="#52575C">
              Ketersediaan Produk
            </Text>
          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
            <FormControl>
              <RadioGroup onChange={setStatus}>
                <HStack spacing="24px">
                  <Radio value="Ready Stock">Ready stock</Radio>
                  <Radio value="Pre-Order">Pre-order</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Text fontSize="18px" color="#52575C">
              Nama Produk
            </Text>
          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
            <Input
              borderColor="#EBF0F5"
              borderRadius="6px"
              borderWidth="0.1rem"
              bg="white"
              _focus={{ bg: 'none', borderColor: { COLOR } }}
              _hover={{ bg: 'none', borderColor: { COLOR } }}
              variant="filled"
              placeholder="Masukan nama produk"
              onChange={(event) => setName(event.target.value)}
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Text fontSize="18px" color="#52575C">
              Kategori
            </Text>
          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
            <Select
              borderColor="primary.grayBorder"
              borderRadius="6px"
              borderWidth="0.1rem"
              _focus={{ bg: 'none', borderColor: { COLOR } }}
              _hover={{ bg: 'none', borderColor: { COLOR } }}
              bg="white"
              color="neutral.grey"
              variant="filled"
              placeholder="Pilih Kategori Produk"
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="Kain">Kain</option>
              <option value="Baju">Baju</option>
            </Select>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Text fontSize="18px" color="#52575C">
              Keterangan Produk
            </Text>
          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
            <Textarea
              borderColor="#EBF0F5"
              borderRadius="6px"
              borderWidth="0.1rem"
              bg="white"
              _focus={{ bg: 'none', borderColor: { COLOR } }}
              _hover={{ bg: 'none', borderColor: { COLOR } }}
              variant="filled"
              placeholder="Masukan keterangan produk"
              onChange={(event) => setDesc(event.target.value)}
            />
          </GridItem>
        </Grid>
      </HStack>
    </Card>
  );
};

export const HargaProduk = ({ setQuantity, setPrice }) => {
  return (
    <Card h={{ lg: '300px' }} mt={{ lg: '80px' }}>
      <CardTitle mt={{ lg: '60px' }}>Harga produk</CardTitle>
      <HStack ml={{ lg: '80px' }} mt="20px" spacing="100px">
        <Grid
          w="90%"
          h="200px"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <Text fontSize="18px" color="#52575C">
              Kuantitas
            </Text>
          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
            <InputGroup>
              <Input
                type="number"
                placeholder="0"
                onChange={(event) => setQuantity(event.target.value)}
              />
            </InputGroup>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Text fontSize="18px" color="#52575C">
              Harga Satuan
            </Text>
          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
            <InputGroup>
              <InputLeftAddon>Rp</InputLeftAddon>
              <Input
                type="number"
                placeholder="0"
                onChange={(event) => setPrice(event.target.value)}
              />
            </InputGroup>
          </GridItem>
        </Grid>
      </HStack>
    </Card>
  );
};
