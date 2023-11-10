function tradingPage() {
    return <>
        <div class="trade_search">
        <h1 className="templatecreate">Trade Your Petrs!</h1>
            <form id="form">
                <input type="search" id="query"
                placeholder="Search stickers or users..."/>
                <button type="submit">Search</button>
            </form>
        </div>
    </>;
}
export default tradingPage;