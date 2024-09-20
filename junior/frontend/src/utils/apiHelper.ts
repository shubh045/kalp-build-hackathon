// utils/apiHelper.ts

export interface KalpApiResponse<T = unknown> {
    status: number;
    data: T;
  }
  
  export async function callKalpApi<T = unknown>(
    endpoint: string,
    args: Record<string, unknown> = {}
  ): Promise<KalpApiResponse<T>> {
    const response = await fetch(endpoint, {
      method: 'POST', // All methods are POST except for TotalSupply
      headers: {
        'Content-Type': 'application/json',
        auth: process.env.KALP_API_KEY as string,
      },
      body: JSON.stringify({
        network: 'TESTNET',
        blockchain: 'KALP',
        walletAddress: 'c00eea552e3683c8675c6367b7a11853d7b8b5c0',
        args,
      }),
    });
  
    const data = await response.json();
    return { status: response.status, data };
  }