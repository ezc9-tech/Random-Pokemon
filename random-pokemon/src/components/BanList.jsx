function BanList({ bannedItems }) {

    return (
        <div className="ban-list">
            <h3>Ban List</h3>
            <p>Select an attribute in your listing to ban it</p>

            {bannedItems.map((item, index) => (
                <div key={index} className="banned-item">
                    <p>{item}</p>
                </div>
            ))}
        </div>
    );
}

export default BanList;