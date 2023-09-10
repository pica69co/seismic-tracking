import { QueryClient } from '@tanstack/react-query';

export default function queryClient() {
    new QueryClient(
        { defaultOptions: { 
            queries: { refetchOnWindowFocus: false } 
         }
        })
};