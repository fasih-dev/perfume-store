export default function LoginLayout({ children }: { children: React.ReactNode }) {
	// This layout overrides the admin layout for the login page
	// It removes the sidebar and navbar since the user isn't authenticated yet
	return <>{children}</>;
}

