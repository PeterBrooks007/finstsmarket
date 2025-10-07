import {
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CheckCircle, CloudArrowUp, XCircle } from "@phosphor-icons/react";
import proofofidfront from "../../../assets/proof_of_identity1.png";
import { tokens } from "../../../theme";
import UseWindowSize from "../../../hooks/UseWindowSize";
import { useSelector } from "react-redux";

const AccountVerifications = ({ verificationDrawer }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const size = UseWindowSize();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const elevation = theme.palette.mode === "light" ? 1 : 0;

  const { isLoading, user } = useSelector((state) => state.auth);

  return (
    <>
      <Stack
        spacing={2}
        component={Paper}
        p={4}
        borderRadius={"10px"}
        elevation={elevation}
        backgroundColor={`${colors.dashboardbackground[100]}`}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant={size.width <= 899 ? "body2" : "h6"}>
            ID VERIFICATION
          </Typography>
          <Typography
            variant={size.width <= 899 ? "body2" : "h6"}
            textAlign={"right"}
          >
            {" "}
            {/* STATUS:{" "} */}
            <Chip
              size="large"
              icon={
                user?.isIdVerified ? (
                  <CheckCircle
                    color={user?.isIdVerified ? undefined : "white"}
                    size={20}
                  />
                ) : (
                  <XCircle
                    color={user?.isIdVerified ? undefined : "white"}
                    size={20}
                  />
                )
              }
              label={user?.isIdVerified ? "VERIFIED" : "NOT VERIFIED"}
              color={user?.isIdVerified ? "success" : "default"}
              sx={{
                backgroundColor: user?.isIdVerified ? undefined : "grey.800",
                color: user?.isIdVerified ? undefined : "white",
              }}
            />
          </Typography>
        </Stack>

        <Divider />

        <Stack pt={3} spacing={3}>
          <Stack spacing={1}>
            <Typography variant="subtitle">
              Upload the front of the ID
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              display={"flex"}
              height={{ xs: "auto", sm: "250px" }}
              spacing={2}
            >
              <Box
                flex={{ lg: "45%", xl: verificationDrawer ? "50%" : "30%" }}
                sx={{
                  backgroundColor: `${theme.palette.background}`,
                  width: "100%",
                  height: "100%",
                  border: "2px solid grey",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={user?.idVerificationPhoto?.front || proofofidfront}
                  alt="id front"
                  width={"100%"}
                  height={"100%"}
                  style={{ borderRadius: "15px" }}
                />
              </Box>
              <Box
                flex={{ lg: "55%", xl: verificationDrawer ? "50%" : "70%" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  border: "2px dashed grey",
                  height: { xs: "100%", sm: "100%", md: "100%" },
                  width: "100%",
                  borderRadius: "20px",
                }}
              >
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <CloudArrowUp sx={{ fontSize: { xs: "28px", md: "48px" } }} />

                  <Typography
                    textAlign={"center"}
                    p={0.5}
                    variant={isMobile ? "caption" : "h6"}
                  >
                    click or drop your file here
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>

          <Divider />

          <Stack spacing={1}>
            <Typography variant="subtitle">
              Upload the Back of the ID
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              display={"flex"}
              height={{ xs: "auto", sm: "250px" }}
              spacing={2}
            >
              <Box
                flex={{ lg: "45%", xl: verificationDrawer ? "50%" : "30%" }}
                sx={{
                  backgroundColor: `${theme.palette.background}`,
                  width: "100%",
                  height: "100%",
                  border: "2px solid grey",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={user?.idVerificationPhoto?.back || proofofidfront}
                  alt="dummyprofileimg"
                  width={"100%"}
                  height={"100%"}
                  style={{ borderRadius: "15px" }}
                />
              </Box>
              <Box
                flex={{ lg: "55%", xl: verificationDrawer ? "50%" : "70%" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  border: "2px dashed grey",
                  height: { xs: "100%", sm: "100%", md: "100%" },
                  width: "100%",
                  borderRadius: "20px",
                }}
              >
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <CloudArrowUp sx={{ fontSize: { xs: "28px", md: "48px" } }} />

                  <Typography
                    textAlign={"center"}
                    p={0.5}
                    variant={isMobile ? "caption" : "h6"}
                  >
                    click or drop your file here
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>

          <Button
            fullWidth
            color="inherit"
            size="large"
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "text.primary",
              borderRadius: "10px",
              padding: "15px",
              fontWeight: "600",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
              "&:hover": {
                bgcolor: "text.primary",
                color: (theme) =>
                  theme.palette.mode === "light" ? "common.whitw" : "grey.800",
              },
            }}
          >
            Request Verification
          </Button>
        </Stack>
      </Stack>

      {/* <Stack
        spacing={2}
        component={Paper}
        p={4}
        borderRadius={"10px"}
        elevation={elevation}
        backgroundColor={`${colors.dashboardbackground[100]}`}
        mt={4}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant={ size.width <= 899 ? "body2" : "h6" }>ADDRESS VERIFICATION</Typography>
          <Typography variant={ size.width <= 899 ? "body2" : "h6" } textAlign={"right"}> STATUS: NOT VERIFIED</Typography>
        </Stack>

        <Divider />

        <Stack pt={3} spacing={3}>
          <Stack spacing={1}>
            <Typography variant="subtitle">
              Upload the front of the ID
            </Typography>

            <Stack
              direction={{xs: "column",  sm: "row"}}
              display={"flex"}
              height={{xs: "350px", sm:"250px"}}
              spacing={2}
            >
              <Box
                flex={{ lg: "45%", xl: verificationDrawer ? "50%" : "30%" }}
                sx={{
                  backgroundColor: `${theme.palette.background}`,
                  width: "100%",
                  height: "100%",
                  border: "2px solid grey",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={proofofidfront}
                  alt="dummyprofileimg"
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
              <Box
                flex={{ lg: "55%", xl: verificationDrawer ? "50%" : "70%" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  border: "2px dashed grey",
                  height: { xs: "100%", sm: "100%", md: "100%" },
                  width: "100%",
                  borderRadius: "20px",
                }}
              >
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <CloudArrowUp sx={{ fontSize: { xs: "28px", md: "48px" } }} />

                  <Typography
                    textAlign={"center"}
                    p={0.5}
                    variant={isMobile ? "caption" : "h6"}
                  >
                    click or drop your file here
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>

          <Divider />

          <Stack spacing={1}>
            <Typography variant="subtitle">
              Upload the Back of the ID
            </Typography>

            <Stack
              direction={{xs: "column",  sm: "row"}}
              display={"flex"}
              height={{xs: "350px", sm:"250px"}}
              spacing={2}
            >
              <Box
                flex={{ lg: "45%", xl: verificationDrawer ? "50%" : "30%" }}
                sx={{
                  backgroundColor: `${theme.palette.background}`,
                  width: "100%",
                  height: "100%",
                  border: "2px solid grey",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={proofofidfront}
                  alt="dummyprofileimg"
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
              <Box
                flex={{ lg: "55%", xl: verificationDrawer ? "50%" : "70%" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  border: "2px dashed grey",
                  height: { xs: "100%", sm: "100%", md: "100%" },
                  width: "100%",
                  borderRadius: "20px",
                }}
              >
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <CloudArrowUp sx={{ fontSize: { xs: "28px", md: "48px" } }} />

                  <Typography
                    textAlign={"center"}
                    p={0.5}
                    variant={isMobile ? "caption" : "h6"}
                  >
                    click or drop your file here
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>

          <Button
            fullWidth
            color="inherit"
            size="large"
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "text.primary",
              borderRadius: "10px",
              padding: "15px",
              fontWeight: "600",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
              "&:hover": {
                bgcolor: "text.primary",
                color: (theme) =>
                  theme.palette.mode === "light" ? "common.whitw" : "grey.800",
              },
            }}
          >
            Request Verification
          </Button>
        </Stack>
      </Stack> */}
    </>
  );
};

export default AccountVerifications;
