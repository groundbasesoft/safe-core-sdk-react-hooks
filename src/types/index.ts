import type { SdkStarterKitConfig } from '@safe-global/sdk-starter-kit'
import type { Address, CustomTransport, HttpTransport } from 'viem'
import type { Chain as ChainType } from 'viem/chains'

export type EIP1193Provider = Exclude<SdkStarterKitConfig['provider'], string>

export type CreateConfigParams<
  Provider extends SdkStarterKitConfig['provider'] = SdkStarterKitConfig['provider'],
  Signer extends SdkStarterKitConfig['signer'] = SdkStarterKitConfig['signer'],
  Chain extends ChainType = ChainType
> = { chain: Chain; provider: Provider; signer: Signer } & SdkStarterKitConfig

export type SafeConfig<
  Provider extends SdkStarterKitConfig['provider'] = SdkStarterKitConfig['provider'],
  Signer extends SdkStarterKitConfig['signer'] = SdkStarterKitConfig['signer'],
  Chain extends ChainType = ChainType
> = SdkStarterKitConfig & { chain: Chain; provider: Provider; signer: Signer } & (Provider extends string
    ? { transport: HttpTransport }
    : { transport: CustomTransport })

export type SafeConfigWithSigner = SafeConfig & { signer: string }

export type ConfigParam<Config extends SafeConfig = SafeConfig> = {
  config?: Config
}

export type SafeInfo = {
  address: Address
  isDeployed: boolean
  nonce: number
  owners: Address[]
  threshold: number
}
