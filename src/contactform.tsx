// mport * as Yup from "yup";
// import { useCallback, useEffect, useMemo, useState } from "react";
// import { useSnackbar } from "notistack";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { LoadingButton } from "@mui/lab";
// import { Box, Card, Grid, Stack, Typography } from "@mui/material";
// import { fData } from "src/common/utils/formatNumber";
// import { APP_PATHS } from "src/app/routing/paths";
// import { Contact } from "src/common/@types/contacts";
// import { countries } from "src/common/_mock";
// import Label from "src/common/components/Label";
// import {
//   FormProvider,
//   RHFSelect,
//   RHFTextField,
//   RHFUploadAvatar,
// } from "src/common/components/hook-form";
// import {
//   useUpdateContactMutation,
//   useAddContactMutation,
//   useUploadAvatarMutation,
// } from "../slice";

// type FormValuesProps = Omit<Contact, "id">;

// type Props = {
//   isEdit: boolean;
//   currentUser?: Contact;
// };

// const ContactForm = ({ isEdit, currentUser }: Props) => {
//   const [updateContact] = useUpdateContactMutation();
//   const [addContact] = useAddContactMutation();
//   const [uploadAvatar] = useUploadAvatarMutation();
//   const [avatarUrl, setAvatarUrl] = useState("");

//   const navigate = useNavigate();

//   const { enqueueSnackbar } = useSnackbar();

//   const NewUserSchema = Yup.object().shape({
//     basicDetails: Yup.string().required("Name is required"),
//     email: Yup.string().required("Email is required").email(),
//     phone: Yup.string().required("Phone number is required"),
//     address: Yup.string().required("Address is required"),
//     country: Yup.string().required("country is required"),
//     state: Yup.string().required("State is required"),
//     city: Yup.string().required("City is required"),
//     pincode: Yup.string().required("Pincode is required"),
//     avatar: Yup.mixed().test(
//       "required",
//       "Avatar is required",
//       (value) => value !== ""
//     ),
//   });

//   const defaultValues = useMemo(
//     () => ({
//       basicDetails: currentUser?.basicDetails || "",
//       email: currentUser?.email || "",
//       phone: currentUser?.phone || "",
//       address: currentUser?.address || "",
//       country: currentUser?.country || "",
//       state: currentUser?.state || "",
//       city: currentUser?.city || "",
//       pincode: currentUser?.pincode || "",
//       avatar: currentUser?.avatar || "",
//       status: currentUser?.status,
//     }),
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [currentUser]
//   );

//   const methods = useForm<FormValuesProps>({
//     resolver: yupResolver(NewUserSchema),
//     defaultValues,
//   });

//   const {
//     reset,
//     watch,
//     setValue,
//     handleSubmit,
//     formState: { isSubmitting },
//   } = methods;

//   const values = watch();

//   useEffect(() => {
//     if (isEdit && currentUser) {
//       reset(defaultValues);
//     }
//     if (!isEdit) {
//       reset(defaultValues);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isEdit, currentUser]);

//   const onSubmit = async (data: FormValuesProps) => {
//     let formPayload = data;
//     if (avatarUrl) {
//       formPayload = { ...formPayload, avatar: avatarUrl };
//     }

//     if (isEdit && currentUser) {
//       updateContact({
//         id: currentUser.id,
//         ...formPayload,
//       });
//     } else {
//       addContact(formPayload);
//     }
//     enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
//     navigate(APP_PATHS.contacts.root);
//   };

//   const handleDrop = useCallback(
//     async (acceptedFiles) => {
//       const file = acceptedFiles[0];
//       const formData = new FormData();
//       formData.append("avatar", file);
//       try {
//         const result = await uploadAvatar(formData).unwrap();
//         setAvatarUrl(result.avatarUrl);
//         setValue(
//           "avatar",
//           Object.assign(file, {
//             preview: URL.createObjectURL(file),
//           })
//         );
//       } catch (e) {
//         enqueueSnackbar("Avatar image upload failed.");
//       }
//     },
//     [setValue, uploadAvatar, enqueueSnackbar]
//   );

//   return (
//     <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={4}>
//           <Card sx={{ py: 10, px: 3 }}>
//             {isEdit && (
//               <Label
//                 color={values.status !== "active" ? "error" : "success"}
//                 sx={{
//                   textTransform: "uppercase",
//                   position: "absolute",
//                   top: 24,
//                   right: 24,
//                 }}
//               >
//                 {values.status}
//               </Label>
//             )}

//             <Box sx={{ mb: 5 }}>
//               <RHFUploadAvatar
//                 name="avatar"
//                 accept="image/*"
//                 maxSize={3145728}
//                 onDrop={handleDrop}
//                 helperText={
//                   <Typography
//                     variant="caption"
//                     sx={{
//                       mt: 2,
//                       mx: "auto",
//                       display: "block",
//                       textAlign: "center",
//                       color: "text.secondary",
//                     }}
//                   >
//                     Allowed *.jpeg, *.jpg, *.png, *.gif
//                     <br /> max size of {fData(3145728)}
//                   </Typography>
//                 }
//               />
//             </Box>
//           </Card>
//         </Grid>

//         <Grid item xs={12} md={8}>
//           <Card sx={{ p: 3 }}>
//             <Box
//               sx={{
//                 display: "grid",
//                 columnGap: 2,
//                 rowGap: 3,
//                 gridTemplateColumns: {
//                   xs: "repeat(1, 1fr)",
//                   sm: "repeat(2, 1fr)",
//                 },
//               }}
//             >
//               <RHFTextField name="basicDetails" label="Full Name" />
//               <RHFTextField name="email" label="Email Address" />
//               <RHFTextField name="phone" label="Phone Number" />

//               <RHFSelect name="country" label="Country" placeholder="Country">
//                 <option value="" />
//                 {countries.map((option) => (
//                   <option key={option.code} value={option.label}>
//                     {option.label}
//                   </option>
//                 ))}
//               </RHFSelect>

//               <RHFTextField name="state" label="State/Region" />
//               <RHFTextField name="city" label="City" />
//               <RHFTextField name="address" label="Address" />
//               <RHFTextField name="pincode" label="PinCode" />
//             </Box>

//             <Stack alignItems="flex-end" sx={{ mt: 3 }}>
//               <LoadingButton
//                 type="submit"
//                 variant="contained"
//                 loading={isSubmitting}
//               >
//                 {!isEdit ? "Create User" : "Save Changes"}
//               </LoadingButton>
//             </Stack>
//           </Card>
//         </Grid>
//       </Grid>
//     </FormProvider>
//   );
// };

// export default ContactForm;

export const ContactForm = () => {
  return <div></div>;
};
