import { Box, Grid2, Paper, Typography } from "@mui/material";
import { useState } from "react";
import LoginBox from "../../components/LoginBox";
import SignupBox from "../../components/SignupBox";
import useFirebase from "../../hooks/useFirebase";

export default function AuthPage() {
	const [isLoggingIn, setIsLoggingIn] = useState(true);
	const { handleLogin, handleSignUp } = useFirebase();
	return (
		<Grid2 container style={{
			height: "100vh",
			width: "100vw"
		}}>
			<Grid2 size={6}>
				<Box
					style={{
						height: "100%",
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Typography variant="h2">Login</Typography>
				</Box>
			</Grid2>
			<Grid2 size={6}>
				<Box
					style={{
						height: "100%",
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Paper elevation={3} style={{ margin: 20 }}>
						{
							isLoggingIn ?
								<LoginBox
									handleCreateAccountButton={() => setIsLoggingIn(false)}
									handleLogin={handleLogin}
								/> :
								<SignupBox
									handleLoginButton={() => setIsLoggingIn(true)}
									handleSignUp={handleSignUp}
								/>
						}
					</Paper>
				</Box>
			</Grid2>
		</Grid2>
	)
}