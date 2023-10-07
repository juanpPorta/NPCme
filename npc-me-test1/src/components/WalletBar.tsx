// import { Button } from '../components/ui/button';
// import { useAccount, useConnectors } from '@starknet-react/core';
// import { useEffect } from 'react';

// const Connection = () => {
//   const { address, status } = useAccount(); //address and status of user
//   const { connect, available, disconnect, refresh } = useConnectors();

//   console.log(status);
//   console.log(address);

//   useEffect(() => {
//     const interval = setInterval(refresh, 5000);
//     return () => clearInterval(interval);
//   }, [refresh]);

  
// function WalletConnected({ address }: { address: string }) {
//     const { disconnect } = useConnectors();
//     const { chain } = useNetwork();
//     const shortenedAddress = useMemo(() => {
//       if (!address) return "";
//       return `${address.slice(0, 6)}...${address.slice(-4)}`;
//     }, [address]);
  
//     return (
//       <StyledBox>
//         <StyledButton color="inherit" onClick={disconnect}>
//           {shortenedAddress}
//         </StyledButton>
//         <span>&nbsp;Connected to {chain && chain.name}</span>
//       </StyledBox>
//     );
//   }
  
//   function ConnectWallet() {
//     const { connectors, connect } = useConnectors();
//     const [open, setOpen] = useState(false);
//     const theme = useTheme();
  
//     const handleClickOpen = () => {
//       setOpen(true);
//     };
  
//     const handleClose = () => {
//       setOpen(false);
//     };

//   return (
//     <div>
//       {!address ? (
//         available.map((connector) => (
//           <Button key={connector.id} onClick={() => connect(connector)}>
//             Connect {connector.id}
//           </Button>
//         ))
//       ) : (
//         <div className="flex flex-row items-center gap-4 justify-self-end">
//           <div>{address}</div>
//           <Button onClick={disconnect}>Disconnect</Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Connection;

// import Image from "next/image";
import { useConnectors, useNetwork, useAccount } from "@starknet-react/core";
import { useMemo, useState } from "react";
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  Box,
  Grid,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

function WalletBar() {

  const { address, status } = useAccount(); //address and status of user

  console.log(status);

  
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const ConnectWalletButton = styled(Button)(() => ({
  border: "1px solid",
  width: "-webkit-fill-available",
  display: "flex",
  justifyContent: "space-between",
}));

const StyledBox = styled(Box)(() => ({
  marginLeft: "auto",
}));

function WalletConnected({ address }: { address: string }) {
  const { disconnect } = useConnectors();
  const { chain } = useNetwork();
  const shortenedAddress = useMemo(() => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);

  return (
    <StyledBox>
      <StyledButton color="inherit" onClick={disconnect}>
        {shortenedAddress}
      </StyledButton>
      <span>&nbsp;Connected to {chain && chain.name}</span>
    </StyledBox>
  );
}

function ConnectWallet() {
  const { connectors, connect } = useConnectors();
  console.log(connectors);
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledBox>
      <StyledButton color="inherit" onClick={handleClickOpen}>
        Connect Wallet
      </StyledButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Connect to a wallet</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid container direction="column" alignItems="flex-start" gap={1}>
              {connectors.map((connector) => (
                <ConnectWalletButton
                  key={connector.id}
                  onClick={() => {
                    connect(connector);
                    handleClose();
                  }}
                  sx={{ margin: theme.spacing(1) }}
                >
                  {connector.id}
                  <img
                    src={`/${connector.id}-icon.png`}
                    alt={connector.id}
                    width={30}
                    height={30}
                  />
                </ConnectWalletButton>
              ))}
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </StyledBox>
  );
}

if (address) {
  return (
    <WalletConnected address={address}/>
    );
} else {
  return (<ConnectWallet />); 
}
}

export default WalletBar;