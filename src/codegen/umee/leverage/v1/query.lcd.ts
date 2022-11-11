import { LCDClient } from "@osmonauts/lcd";
import { QueryParams, QueryParamsResponseSDKType, QueryRegisteredTokens, QueryRegisteredTokensResponseSDKType, QueryMarketSummary, QueryMarketSummaryResponseSDKType, QueryAccountBalances, QueryAccountBalancesResponseSDKType, QueryAccountSummary, QueryAccountSummaryResponseSDKType, QueryLiquidationTargets, QueryLiquidationTargetsResponseSDKType, QueryBadDebts, QueryBadDebtsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.registeredTokens = this.registeredTokens.bind(this);
    this.marketSummary = this.marketSummary.bind(this);
    this.accountBalances = this.accountBalances.bind(this);
    this.accountSummary = this.accountSummary.bind(this);
    this.liquidationTargets = this.liquidationTargets.bind(this);
    this.badDebts = this.badDebts.bind(this);
  }
  /* Params queries the parameters of the x/leverage module. */


  async params(_params: QueryParams = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `umee/leverage/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* RegisteredTokens queries for all the registered tokens. */


  async registeredTokens(_params: QueryRegisteredTokens = {}): Promise<QueryRegisteredTokensResponseSDKType> {
    const endpoint = `umee/leverage/v1/registered_tokens`;
    return await this.req.get<QueryRegisteredTokensResponseSDKType>(endpoint);
  }
  /* MarketSummary queries a base asset's current borrowing and supplying conditions. */


  async marketSummary(params: QueryMarketSummary): Promise<QueryMarketSummaryResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `umee/leverage/v1/market_summary`;
    return await this.req.get<QueryMarketSummaryResponseSDKType>(endpoint, options);
  }
  /* AccountBalances queries an account's current supply, collateral, and borrow positions. */


  async accountBalances(params: QueryAccountBalances): Promise<QueryAccountBalancesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }

    const endpoint = `umee/leverage/v1/account_balances`;
    return await this.req.get<QueryAccountBalancesResponseSDKType>(endpoint, options);
  }
  /* AccountSummary queries USD values representing an account's total positions and borrowing limits. It requires oracle prices to return successfully. */


  async accountSummary(params: QueryAccountSummary): Promise<QueryAccountSummaryResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }

    const endpoint = `umee/leverage/v1/account_summary`;
    return await this.req.get<QueryAccountSummaryResponseSDKType>(endpoint, options);
  }
  /* LiquidationTargets queries a list of all borrower account addresses eligible for liquidation. */


  async liquidationTargets(_params: QueryLiquidationTargets = {}): Promise<QueryLiquidationTargetsResponseSDKType> {
    const endpoint = `umee/leverage/v1/liquidation_targets`;
    return await this.req.get<QueryLiquidationTargetsResponseSDKType>(endpoint);
  }
  /* BadDebts queries a list of borrow positions that have been marked for bad debt repayment. */


  async badDebts(_params: QueryBadDebts = {}): Promise<QueryBadDebtsResponseSDKType> {
    const endpoint = `umee/leverage/v1/bad_debts`;
    return await this.req.get<QueryBadDebtsResponseSDKType>(endpoint);
  }

}