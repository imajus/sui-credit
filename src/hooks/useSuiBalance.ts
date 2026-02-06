import { useCurrentAccount, useCurrentClient } from '@mysten/dapp-kit-react';
import { useQuery } from '@tanstack/react-query';

export function useAccountBalance() {
  const account = useCurrentAccount();
  const client = useCurrentClient();

  return useQuery({
    queryKey: ['balance', account?.address],
    queryFn: async () => {
      if (!account) return null;
      return await client.getBalance({ owner: account.address });
    },
    enabled: !!account,
  });
}
