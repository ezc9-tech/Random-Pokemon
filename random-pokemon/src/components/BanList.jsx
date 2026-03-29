function BanList({ bannedItems, unBan }) {

    return (
        <div className="ban-list">
            <h3>Ban List</h3>
            <p>Select an attribute in your listing to ban it</p>

            {bannedItems.map((item, index) => (
                <div key={index} onClick={() => unBan(item)} className="banned-item">
                    <p>{item}</p>
                </div>
            ))}
        </div>
    );
}

export default BanList;