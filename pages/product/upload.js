// import { Form, Formik } from 'formik';
// import React from 'react';
// import { array, object, string } from 'yup';
// import { MultipleUploadField } from '../../components/Forms/Upload/MultipleFileUploadField';
// import { Flex } from '@chakra-ui/layout';
// import { Button } from '@chakra-ui/button';

// export default function Upload() {
//     return (
//         <Flex>
//             <>
//                 <Formik
//                     initialValues={{ files: [] }}
//                     validationSchema={object({
//                         files: array(
//                             object({
//                                 url: string().required(),
//                             })
//                         ),
//                     })}
//                     onSubmit={(values) => {
//                         console.log('values', values);
//                         return new Promise((res) => setTimeout(res, 2000));
//                     }}
//                 >
//                     {({ values, errors, isValid, isSubmitting }) => (
//                         <Form>
//                             <Grid spacing={2} direction="column">
//                                 <MultipleUploadField name="files" />

//                                 <Grid item>
//                                     <Button
//                                         variant="contained"
//                                         color="primary"
//                                         disabled={!isValid || isSubmitting}
//                                         type="submit"
//                                     >
//                                         Submit
//                                     </Button>
//                                 </Grid>
//                             </Grid>

//                             <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
//                         </Form>
//                     )}
//                 </Formik>
//             </>
//         </Flex>
//     );
// }
