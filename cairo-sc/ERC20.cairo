#[contract]
mod ERC20 {
    use starknet::get_caller_address;
    use starknet::contract_address_const;
    use starknet::ContractAddress;

    struct Storage {
        _name: felt252,
        _symbol: felt252,
        _decimals: u8,
        _total_supply: u256,
        _balances: LegacyMap<ContractAddress, u256>,
        _allowances: LegacyMap<(ContractAddress, ContractAddress), u256>,
    }

    #[event]
    fn Transfer(from: ContractAddress, to: ContractAddress, value: u256) {}

    #[event]
    fn Approval(owner: ContractAddress, spender: ContractAddress, value: u256) {}

    #[constructor]
    fn constructor(
        name: felt252,
        symbol: felt252,
        decimals: u8,
        initial_supply: u256,
        recipient: ContractAddress
    ) {
        _name::write(name);
        _symbol::write(symbol);
        _decimals::write(decimals);
        _total_supply::write(initial_supply);
        _balances::write(recipient, initial_supply);
        Transfer(contract_address_const::<0>(), recipient, initial_supply);
    }

    #[view]
    fn name() -> felt252 {
        _name::read()
    }

    #[view]
    fn symbol() -> felt252 {
        _symbol::read()
    }

    #[view]
    fn decimals() -> u8 {
        _decimals::read()
    }

    #[view]
    fn totalSupply() -> u256 {
        _total_supply::read()
    }

    #[view]
    fn balanceOf(account: ContractAddress) -> u256 {
        _balances::read(account)
    }

    #[view]
    fn allowance(owner: ContractAddress, spender: ContractAddress) -> u256 {
        _allowances::read((owner, spender))
    }

    #[external]
    fn approve(spender: ContractAddress, amount: u256) -> bool {
        let owner = get_caller_address();

        _allowances::write((owner, spender), amount);

        Approval(owner, spender, amount);

        true
    }

    #[external]
    fn mint(recipient: ContractAddress, amount: u256) {
        _total_supply::write(_total_supply::read() + amount);
        _balances::write(recipient, _balances::read(recipient) + amount);
    }

    #[external]
    fn transfer(to: ContractAddress, amount: u256) -> bool {
        let from = get_caller_address();

        _balances::write(from, _balances::read(from) - amount);
        _balances::write(to, _balances::read(to) + amount);

        Transfer(from, to, amount);

        true
    }

    #[external]
    fn transferFrom(from: ContractAddress, to: ContractAddress, amount: u256) -> bool {
        let caller = get_caller_address();
        let allowed: u256 = _allowances::read((from, caller));

        let ONES_MASK = 0xffffffffffffffffffffffffffffffff_u128;

        let is_max = (allowed.low == ONES_MASK) & (allowed.high == ONES_MASK);

        if !is_max {
            _allowances::write((from, caller), allowed - amount);
            Approval(from, caller, allowed - amount);
        }

        _balances::write(from, _balances::read(from) - amount);
        _balances::write(to, _balances::read(to) + amount);

        Transfer(from, to, amount);

        true
    }
}