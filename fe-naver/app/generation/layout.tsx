import * as React from 'react';
import {LayoutProps} from "@/components/auth/layout";
import GlobalStyles from "@mui/material/GlobalStyles";
import Box from "@mui/material/Box";
import {SideNav} from "@/components/dashboard/layout/side-nav";
import {MainNav} from "@/components/dashboard/layout/main-nav";
import Container from "@mui/material/Container";
import {AuthGuard} from "@/components/auth/auth-guard";

export default function Layout({children}: LayoutProps):React.JSX.Element {
    return (
        <AuthGuard>
            <GlobalStyles
                styles={{
                    body: {
                        '--MainNav-height': '56px',
                        '--MainNav-zIndex': 1000,
                        '--SideNav-width': '280px',
                        '--SideNav-zIndex': 1100,
                        '--MobileNav-width': '320px',
                        '--MobileNav-zIndex': 1100,
                    },
                }}
            />
            <Box
                sx={{
                    bgcolor: 'var(--mui-palette-background-default)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    minHeight: '100%',
                }}
            >
                <SideNav />
                <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', pl: { lg: 'var(--SideNav-width)' } }}>
                    <MainNav />
                    <main>
                        <Container maxWidth="xl" sx={{ py: '64px' }}>
                            {children}
                        </Container>
                    </main>
                </Box>
            </Box>
        </AuthGuard>
    );
}