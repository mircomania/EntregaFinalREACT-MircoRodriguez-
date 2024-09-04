export const Brief = ({ items, total, removeItem, reset, buyer, handleChange, handleOrderClick }) => {
    return (
        <>
            <h1>Detalle de compra</h1>
            <button onClick={reset}>Vaciar</button>
            {items.map((i) => {
                return (
                    <div key={i.id}>
                        <h2>{i.title}</h2>
                        <img src={i.image} alt="" height={150} />
                        <p>{i.quantity}</p>
                        <p onClick={() => removeItem(i.id)}>X</p>
                    </div>
                );
            })}
            <div>Total {total}</div> <br />
            <form onSubmit={handleOrderClick}>
                <div>
                    <label>Nombre</label>
                    <input value={buyer.name} name="name" onChange={handleChange} type="text" placeholder="Nombre" required />
                </div>

                <div>
                    <label>Apellido</label>
                    <input value={buyer.lastname} name="lastname" onChange={handleChange} type="text" placeholder="Apellido" />
                </div>

                <div>
                    <label>Teléfono</label>
                    <input value={buyer.phone} name="phone" onChange={handleChange} type="tel" placeholder="Teléfono" required />
                </div>

                <div>
                    <label>Email</label>
                    <input value={buyer.email} name="email" onChange={handleChange} type="email" placeholder="Email" required />
                </div>

                <div>
                    <label>Confirmar Email</label>
                    <input
                        value={buyer.emailConfirm}
                        name="emailConfirm"
                        onChange={handleChange}
                        type="email"
                        placeholder="Confirmar Email"
                        required
                    />
                </div>

                <button type="submit">Realizar Compra</button>
            </form>
        </>
    );
};
