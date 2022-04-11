// import React, { useState } from 'react';
// import './App.css';
// import { Grid, Slider, Typography, TextField, Radio, Stack } from '@mui/material';

// function App() {
//   const [buttonText, setButtonText] = useState('Chat with us');
//   const [domainName, setDomainName] = useState('');
//   const [domainError, setDomainError] = useState(false);
//   const [buttonType, setButtonType] = useState('chatWithUs');
//   const [buttonColor, setButtonColor] = useState('#26af05');
//   const [roundCorner, setRoundCorner] = useState('50');
//   const [buttonSize, setButtonSize] = useState([10, 20, 30]);
//   const [position, setPosition] = useState('bottomRight');
//   const [widgetType, setWidgetType] = useState('inline');
//   const [desktopSideSpacing, setDesktopSideSpacing] = useState('15px');
//   const [desktopBottomSpacing, setDesktopBottomSpacing] = useState('15px');
//   const [brandName, setBrandName] = useState('Data is Good');
//   const [brandTitle, setBrandTitle] = useState('');
//   const [welcomeMessage, setWelcomeMessage] = useState(`Hi There, How can I help You?`);
//   const [showPreview, setShowPreview] = useState(false);
//   return (
//     <Stack sx={{ p: 4 }}>
//       <Grid container justifyContent='flex-end' alignItems='flex-end'>
//         <Grid item md={12}>
//           <Typography variant='h5' gutterBottom component='div'>
//             Customize Whatsapp chat button
//           </Typography>
//           <Typography variant='h6' gutterBottom component='div' style={{ color: 'grey' }}>
//             Chat Button Setting
//           </Typography>
//           <Stack alignItems='flex-start'>
//             <Typography variant='subtitle1' gutterBottom component='div' mt={0.5}>
//               Domain Name
//             </Typography>
//             <TextField
//               id='outlined-basic'
//               value={domainName}
//               placeholder='Chat with us'
//               variant='outlined'
//               size='small'
//               onChange={(event) => {
//                 setDomainName(event.target.value);
//               }}
//               error={domainError}
//               helperText={domainError ? 'Enter the Domain name' : ''}
//               onBlur={() => {
//                 setDomainError(!domainName);
//               }}
//             />
//           </Stack>
//           <Stack alignItems='flex-start'>
//             <Typography variant='subtitle1' gutterBottom component='div' mt={2}>
//               Button Text
//             </Typography>
//             <TextField
//               id='outlined-basic'
//               value={buttonText}
//               placeholder='Chat with us'
//               variant='outlined'
//               size='small'
//               onChange={(event) => {
//                 setButtonText(event.target.value);
//               }}
//             />
//           </Stack>
//           <Typography variant='subtitle1' gutterBottom component='div' mt={2}>
//             Button Type
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item>
//               <Stack direction={'row'} alignItems='flex-start' sx={{ mt: 3 }}>
//                 <Radio
//                   checked={buttonType === 'chatWithUs'}
//                   onClick={() => {
//                     setButtonType('chatWithUs');
//                   }}
//                 />
//                 <Stack direction={'row'} alignItems='center' style={{ backgroundColor: '#26af05', padding: `10px`, borderRadius: `50px`, color: 'white' }}>
//                   <img src={'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png'} alt='whatsapp' style={{ width: '20px', objectFit: 'contain' }} />
//                   {buttonText}
//                 </Stack>
//               </Stack>
//             </Grid>
//             <Grid item>
//               <Stack direction={'row'} alignItems='flex-start' sx={{ mt: 3 }}>
//                 <Radio
//                   checked={buttonType !== 'chatWithUs'}
//                   onClick={() => {
//                     setButtonType('');
//                   }}
//                 />
//                 <Stack direction={'row'} alignItems='center' style={{ backgroundColor: '#26af05', padding: `10px`, borderRadius: `50px`, color: 'white' }}>
//                   <img src={'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png'} alt='whatsapp' style={{ width: '20px', objectFit: 'contain' }} />
//                 </Stack>
//               </Stack>
//             </Grid>
//           </Grid>
//           <Grid container spacing={2}>
//             <Grid item>
//               <Typography variant='subtitle1' gutterBottom component='div' mt={2}>
//                 Button Color
//               </Typography>
//               <Stack direction={'row'} alignItems='center'>
//                 <input
//                   value={buttonColor}
//                   type={'color'}
//                   style={{ width: '30px', marginRight: '15px' }}
//                   onChange={(event) => {
//                     setButtonColor(event.target.value);
//                   }}
//                 />
//                 <TextField
//                   id='outlined-basic'
//                   value={buttonColor}
//                   variant='outlined'
//                   size='small'
//                   disabled
//                   onChange={(event) => {
//                     setButtonColor(event.target.value);
//                   }}
//                 />
//               </Stack>
//             </Grid>
//             <Grid item>
//               <Typography variant='subtitle1' gutterBottom component='div' mt={2}>
//                 Rounded Corner (px)
//               </Typography>
//               <TextField
//                 id='outlined-basic'
//                 value={roundCorner}
//                 variant='outlined'
//                 size='small'
//                 onChange={(event) => {
//                   setRoundCorner(event.target.value);
//                 }}
//               />
//             </Grid>
//           </Grid>
//           <Typography variant='subtitle1' gutterBottom component='div' mt={2}>
//             Button Size
//           </Typography>
//           <Grid container>
//             <Grid item md={3}>
//               <Slider
//                 size='small'
//                 track={false}
//                 value={buttonSize}
//                 aria-label='Small'
//                 valueLabelDisplay='auto'
//                 min={5}
//                 max={30}
//                 onChange={(event, newValue) => {
//                   setButtonSize(newValue);
//                 }}
//               />
//             </Grid>
//           </Grid>
//           <Typography variant='subtitle1' gutterBottom component='div' mt={1}>
//             Widget Type
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item>
//               <Stack direction={'row'} alignItems='center'>
//                 <Radio
//                   checked={widgetType === 'inline'}
//                   onClick={() => {
//                     setWidgetType('inline');
//                   }}
//                 />
//                 <Typography variant='subtitle1' gutterBottom component='div'>
//                   Inline
//                 </Typography>
//               </Stack>
//             </Grid>
//             <Grid item>
//               <Stack direction={'row'} alignItems='center'>
//                 <Radio
//                   checked={widgetType === 'floating'}
//                   onClick={() => {
//                     setWidgetType('floating');
//                   }}
//                 />
//                 <Typography variant='subtitle1' gutterBottom component='div'>
//                   Floating
//                 </Typography>
//               </Stack>
//             </Grid>
//           </Grid>
//           <Typography variant='subtitle1' gutterBottom component='div' mt={1}>
//             Position
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item>
//               <Stack direction={'row'} alignItems='center'>
//                 <Radio
//                   checked={position === 'bottomRight'}
//                   onClick={() => {
//                     setPosition('bottomRight');
//                   }}
//                 />
//                 <Typography variant='subtitle1' gutterBottom component='div'>
//                   Bottom Right
//                 </Typography>
//               </Stack>
//             </Grid>
//             <Grid item>
//               <Stack direction={'row'} alignItems='center'>
//                 <Radio
//                   checked={position === 'bottomLeft'}
//                   onClick={() => {
//                     setPosition('bottomLeft');
//                   }}
//                 />
//                 <Typography variant='subtitle1' gutterBottom component='div'>
//                   Bottom Left
//                 </Typography>
//               </Stack>
//             </Grid>
//           </Grid>
//           <Grid container spacing={2}>
//             <Grid item>
//               <Typography variant='subtitle1' gutterBottom component='div' mt={1}>
//                 Desktop Side Spacing
//               </Typography>
//               <TextField
//                 id='outlined-basic'
//                 value={desktopSideSpacing}
//                 variant='outlined'
//                 size='small'
//                 onChange={(event) => {
//                   setDesktopSideSpacing(event.target.value);
//                 }}
//               />
//             </Grid>
//             <Grid item>
//               <Typography variant='subtitle1' gutterBottom component='div' mt={1}>
//                 Desktop Bottom Spacing
//               </Typography>
//               <TextField
//                 id='outlined-basic'
//                 value={desktopBottomSpacing}
//                 variant='outlined'
//                 size='small'
//                 onChange={(event) => {
//                   setDesktopBottomSpacing(event.target.value);
//                 }}
//               />
//             </Grid>
//           </Grid>
//           <Typography variant='h6' gutterBottom component='div' style={{ color: 'grey' }} mt={4}>
//             Chat Widget Settings
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item>
//               <Typography variant='subtitle1' gutterBottom component='div'>
//                 Brand Name
//               </Typography>
//               <TextField
//                 id='outlined-basic'
//                 value={brandName}
//                 variant='outlined'
//                 size='small'
//                 onChange={(event) => {
//                   setBrandName(event.target.value);
//                 }}
//               />
//             </Grid>
//             <Grid item>
//               <Typography variant='subtitle1' gutterBottom component='div' mt={1}>
//                 Brand Subtitle
//               </Typography>
//               <TextField
//                 id='outlined-basic'
//                 value={brandTitle}
//                 variant='outlined'
//                 size='small'
//                 onChange={(event) => {
//                   setBrandTitle(event.target.value);
//                 }}
//               />
//             </Grid>
//           </Grid>
//           <Typography variant='subtitle1' gutterBottom component='div' mt={1}>
//             Welcome Message
//           </Typography>
//           <TextField
//             id='outlined-basic'
//             value={welcomeMessage}
//             variant='outlined'
//             rows={2}
//             multiline
//             onChange={(event) => {
//               setWelcomeMessage(event.target.value);
//             }}
//           />
//         </Grid>
//       </Grid>
//       <Grid container justifyContent={position === 'bottomRight' ? 'flex-end' : 'flex-start'} alignItems='flex-end' style={{ marginTop: '25px' }}>
//         <Grid item md={3}>
//           {showPreview && (
//             <Stack sx={{ border: '1px solid grey', borderRadius: '5px' }}>
//               <Stack direction={'row'} alignItems={'center'} sx={{ background: '#075e54', p: 1, borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}>
//                 <img
//                   src={'https://lh6.googleusercontent.com/-OKfO1FQkg4s/AAAAAAAAAAI/AAAAAAAAAAA/qA6tPXjGw9M/s44-p-k-no-ns-nd/photo.jpg'}
//                   alt='whatsapp'
//                   style={{ width: '50px', objectFit: 'contain', borderRadius: `50px` }}
//                 />
//                 <Stack ml={2} sx={{ color: '#ffffff' }}>
//                   <span style={{ display: 'block' }}>{brandName}</span>
//                   <span>{brandTitle}</span>
//                 </Stack>
//               </Stack>
//               <Stack sx={{ background: '#e9ebe6', minHeight: '100px', padding: '25px 10px' }}>
//                 <Stack sx={{ background: '#ffffff', borderRadius: '5px', wordWrap: 'break-word', maxWidth: '60%', minWidth: '0px' }}>
//                   {welcomeMessage && <span style={{ padding: '10px', display: 'inline-block', width: '95%' }}>{welcomeMessage}</span>}
//                 </Stack>
//               </Stack>
//               <Stack justifyContent={'center'} direction={'row'} sx={{ p: 1, background: '#ffffff', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
//                 <Stack direction={'row'} alignItems='center' justifyContent={'center'} sx={{ background: buttonColor, borderRadius: '50px', color: '#ffffff', p: 1 }}>
//                   <img src={'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png'} alt='whatsapp' style={{ width: '20px', objectFit: 'contain' }} />
//                   Start Chat
//                 </Stack>
//               </Stack>
//             </Stack>
//           )}
//           <Stack direction={'row'} justifyContent={'center'} mt={1}>
//             <Stack
//               direction={'row'}
//               justifyContent={'center'}
//               alignItems={'center'}
//               sx={{
//                 backgroundColor: buttonColor,
//                 padding: `${buttonSize}px`,
//                 borderRadius: `${roundCorner}px`,
//                 color: '#ffffff',
//                 cursor: 'pointer',
//               }}
//               onClick={() => {
//                 setShowPreview((showPreview) => !showPreview);
//               }}>
//               <img src={'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png'} alt='whatsapp' style={{ width: '20px', objectFit: 'contain' }} />
//               {buttonType === 'chatWithUs' ? buttonText : ''}
//             </Stack>
//           </Stack>
//         </Grid>
//       </Grid>
//     </Stack>
//   );
// }
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { useState } from 'react';

const App = (props: { loading?: false | undefined }) => {
  const [buttonText, setButtonText] = useState('Chat with us');
  const [buttonType, setButtonType] = useState('chatWithUs');
  const [buttonColor, setButtonColor] = useState('#26af05');
  const [roundCorner, setRoundCorner] = useState('50');
  const [buttonSize, setButtonSize] = useState(10);
  const [position, setPosition] = useState('bottomRight');
  const [desktopSideSpacing, setDesktopSideSpacing] = useState('15px');
  const [desktopBottomSpacing, setDesktopBottomSpacing] = useState('15px');
  const [brandName, setBrandName] = useState('Data is Good');
  const [brandTitle, setBrandTitle] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState(`Hi There, How can I help You?`);
  const [showPreview, setShowPreview] = useState(false);
  const [widgetType, setWidgetType] = useState('Inline');
  const [domainName, setDomainName] = useState('');
  const [domainError, setDomainError] = useState(false);
  const { loading = false } = props;
  return (
    <Stack sx={{ p: 4 }}>
      <Grid container>
        <Grid item md={12}>
          <Typography variant='h5' gutterBottom component='div'>
            Customize Whatsapp chat button
          </Typography>
          <Typography variant='h6' gutterBottom component='div' style={{ color: 'grey' }}>
            Chat Button Setting
          </Typography>
          <Stack alignItems='flex-start'>
            <Typography variant='subtitle1' gutterBottom component='div' mt={0.5}>
              Domain
            </Typography>
            <TextField
              value={domainName}
              id='outlined-basic'
              placeholder='Enter Domain'
              variant='outlined'
              size='small'
              onChange={(event) => {
                setDomainName(event.target.value);
              }}
              error={domainError}
              helperText={domainError ? 'please enter the domain name' : ''}
              onBlur={() => {
                setDomainError(!domainName);
              }}
            />
          </Stack>
          <Stack alignItems='flex-start'>
            <Typography variant='subtitle1' gutterBottom component='div' mt={0.5}>
              Button Text
            </Typography>
            <TextField
              id='outlined-basic'
              value={buttonText}
              placeholder='Chat with us'
              variant='outlined'
              size='small'
              onChange={(event) => {
                setButtonText(event.target.value);
              }}
            />
          </Stack>
          <Typography variant='subtitle1' gutterBottom component='div' mt={2}>
            Button Type
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Stack direction={'row'} alignItems='flex-start' sx={{ mt: 3 }}>
                <Radio
                  checked={buttonType === 'chatWithUs'}
                  onClick={() => {
                    setButtonType('chatWithUs');
                  }}
                />
                <Stack direction={'row'} alignItems='center' style={{ backgroundColor: '#26af05', padding: `10px`, borderRadius: `50px`, color: 'white' }}>
                  <img src={'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png'} alt='whatsapp' style={{ width: '20px', objectFit: 'contain' }} />
                  {buttonText}
                </Stack>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction={'row'} alignItems='flex-start' sx={{ mt: 3 }}>
                <Radio
                  checked={buttonType !== 'chatWithUs'}
                  onClick={() => {
                    setButtonType('');
                  }}
                />
                <Stack direction={'row'} alignItems='center' style={{ backgroundColor: '#26af05', padding: `10px`, borderRadius: `50px`, color: 'white' }}>
                  <img src={'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png'} alt='whatsapp' style={{ width: '20px', objectFit: 'contain' }} />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant='subtitle1' gutterBottom component='div' mt={2}>
                Button Color
              </Typography>
              <Stack direction={'row'} alignItems='center'>
                <input
                  value={buttonColor}
                  type={'color'}
                  style={{ width: '30px', marginRight: '15px' }}
                  onChange={(event) => {
                    setButtonColor(event.target.value);
                  }}
                />
                <TextField
                  id='outlined-basic'
                  value={buttonColor}
                  variant='outlined'
                  size='small'
                  disabled
                  onChange={(event) => {
                    setButtonColor(event.target.value);
                  }}
                />
              </Stack>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1' gutterBottom component='div' mt={2}>
                Rounded Corner (px)
              </Typography>
              <TextField
                id='outlined-basic'
                value={roundCorner}
                variant='outlined'
                size='small'
                onChange={(event) => {
                  setRoundCorner(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Typography variant='subtitle1' gutterBottom component='div' mt={2}>
            Button Size
          </Typography>
          <Grid container>
            <Grid item md={3}>
              <Slider
                size='small'
                value={buttonSize}
                aria-label='Small'
                valueLabelDisplay='auto'
                min={5}
                max={30}
                onChange={(event, newValue) => {
                  setButtonSize(newValue as number);
                }}
              />
            </Grid>
          </Grid>
          <Typography variant='subtitle1' gutterBottom component='div' mt={1}>
            Widget Type
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Stack direction={'row'} alignItems='center'>
                <Radio
                  checked={widgetType === 'Inline'}
                  onClick={() => {
                    setWidgetType('Inline');
                  }}
                />
                <Typography variant='subtitle1' gutterBottom component='div'>
                  Inline
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction={'row'} alignItems='center'>
                <Radio
                  checked={position === 'floating'}
                  onClick={() => {
                    setWidgetType('floating');
                  }}
                />
                <Typography variant='subtitle1' gutterBottom component='div'>
                  Floating
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Typography variant='subtitle1' gutterBottom component='div' mt={1}>
            Floating Position
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Stack direction={'row'} alignItems='center'>
                <Radio
                  checked={position === 'bottomRight'}
                  onClick={() => {
                    setPosition('bottomRight');
                  }}
                />
                <Typography variant='subtitle1' gutterBottom component='div'>
                  Bottom Right
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction={'row'} alignItems='center'>
                <Radio
                  checked={position === 'bottomLeft'}
                  onClick={() => {
                    setPosition('bottomLeft');
                  }}
                />
                <Typography variant='subtitle1' gutterBottom component='div'>
                  Bottom Left
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant='subtitle1' gutterBottom component='div' mt={1}>
                Desktop Side Spacing
              </Typography>
              <TextField
                id='outlined-basic'
                value={desktopSideSpacing}
                variant='outlined'
                size='small'
                onChange={(event) => {
                  setDesktopSideSpacing(event.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <Typography variant='subtitle1' gutterBottom component='div' mt={1}>
                Desktop Bottom Spacing
              </Typography>
              <TextField
                id='outlined-basic'
                value={desktopBottomSpacing}
                variant='outlined'
                size='small'
                onChange={(event) => {
                  setDesktopBottomSpacing(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Typography variant='h6' gutterBottom component='div' style={{ color: 'grey' }} mt={4}>
            Chat Widget Settings
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant='subtitle1' gutterBottom component='div'>
                Brand Name
              </Typography>
              <TextField
                id='outlined-basic'
                value={brandName}
                variant='outlined'
                size='small'
                onChange={(event) => {
                  setBrandName(event.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <Typography variant='subtitle1' gutterBottom component='div' mt={1}>
                Brand Subtitle
              </Typography>
              <TextField
                id='outlined-basic'
                value={brandTitle}
                variant='outlined'
                size='small'
                onChange={(event) => {
                  setBrandTitle(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Typography variant='subtitle1' gutterBottom component='div' mt={1}>
            Welcome Message
          </Typography>
          <TextField
            id='outlined-basic'
            value={welcomeMessage}
            variant='outlined'
            rows={2}
            multiline
            onChange={(event) => {
              setWelcomeMessage(event.target.value);
            }}
          />
        </Grid>
      </Grid>

      {/* Skeleton for inline widget*/}
      <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        <Grid item>
          <Grid container justifyContent={'flex-start'}>
            <Grid item md={12} sx={{}}>
              {/* {domainName ? domainName : <Skeleton variant='text' width={305} height={50} />} */}
              <Skeleton variant='text' width={305} height={50} />
              <Skeleton variant='text' width={305} height={50} />
              {showPreview && (
                <Stack sx={{ border: '1px solid grey', borderRadius: '5px' }}>
                  <Stack direction={'row'} alignItems={'center'} sx={{ background: '#075e54', p: 1, borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}>
                    <img
                      src={'https://lh6.googleusercontent.com/-OKfO1FQkg4s/AAAAAAAAAAI/AAAAAAAAAAA/qA6tPXjGw9M/s44-p-k-no-ns-nd/photo.jpg'}
                      alt='whatsapp'
                      style={{ width: '50px', objectFit: 'contain', borderRadius: `50px` }}
                    />
                    <Stack ml={2} sx={{ color: '#ffffff' }}>
                      <span style={{ display: 'block' }}>{brandName}</span>
                      <span>{brandTitle}</span>
                    </Stack>
                  </Stack>
                  <Stack sx={{ background: '#e9ebe6', minHeight: '100px', padding: '25px 10px' }}>
                    <Stack sx={{ background: '#ffffff', borderRadius: '5px', wordWrap: 'break-word', maxWidth: '60%', minWidth: '0px' }}>
                      {welcomeMessage && <span style={{ padding: '10px', display: 'inline-block', width: '95%' }}>{welcomeMessage}</span>}
                    </Stack>
                  </Stack>
                  <Stack justifyContent={'center'} direction={'row'} sx={{ p: 1, background: '#ffffff', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
                    <Stack direction={'row'} alignItems='center' justifyContent={'center'} sx={{ background: buttonColor, borderRadius: '50px', color: '#ffffff', p: 1 }}>
                      <img src={'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png'} alt='whatsapp' style={{ width: '20px', objectFit: 'contain' }} />
                      Start Chat
                    </Stack>
                  </Stack>
                </Stack>
              )}
              <Stack direction={'row'} justifyContent={'center'} mt={1}>
                <Stack
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  sx={{
                    backgroundColor: buttonColor,
                    padding: `${buttonSize}px`,
                    borderRadius: `${roundCorner}px`,
                    color: '#ffffff',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setShowPreview((showPreview) => !showPreview);
                  }}>
                  <img src={'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png'} alt='whatsapp' style={{ width: '20px', objectFit: 'contain' }} />
                  {buttonType === 'chatWithUs' ? buttonText : ''}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={6}>
          <Skeleton variant='rectangular' width={'50%'} height={340} sx={{ marginTop: '10px' }} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default App;
