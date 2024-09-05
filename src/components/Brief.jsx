export const Brief = ({ items, total, removeItem, reset, buyer, handleChange, handleOrderClick }) => {
    return (
        <div className="container ps-5 pe-5 pt-4 mb-4">
            <h1 className="mb-4">Detalle de compra</h1>

            <div className="row">
                {/* Columna izquierda */}
                <div className="col-md-4">
                    <button onClick={reset} className="btn btn-dark mb-1">
                        Vaciar
                    </button>

                    <div>Total {total}</div>
                    <br />

                    <form onSubmit={handleOrderClick}>
                        <div>
                            <div className="col-md-12">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    id="name"
                                    value={buyer.name}
                                    name="name"
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    required
                                />
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="lastname">Apellido</label>
                                <input
                                    id="lastname"
                                    value={buyer.lastname}
                                    name="lastname"
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Apellido"
                                />
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="phone">Teléfono</label>
                                <input
                                    id="phone"
                                    value={buyer.phone}
                                    name="phone"
                                    onChange={handleChange}
                                    type="tel"
                                    className="form-control"
                                    placeholder="Teléfono"
                                    required
                                />
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    value={buyer.email}
                                    name="email"
                                    onChange={handleChange}
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    required
                                />
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="emailConfirm">Confirmar Email</label>
                                <input
                                    id="emailConfirm"
                                    value={buyer.emailConfirm}
                                    name="emailConfirm"
                                    onChange={handleChange}
                                    type="email"
                                    className="form-control"
                                    placeholder="Confirmar Email"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark mt-4">
                            Realizar Compra
                        </button>
                    </form>
                </div>

                {/* Columna derecha */}
                <div className="col-md-8 ps-5">
                    {items.map((i) => (
                        <div key={i.id} className="mb-3 list-products-cart">
                            <div className="d-flex align-items-center">
                                <p className="me-3">Cantidad: {i.quantity}</p>

                                <img src={i.image} alt="" height={150} className="me-3" />
                                <div>
                                    <h2>{i.title}</h2>

                                    <p className="text-danger" onClick={() => removeItem(i.id)}>
                                        Eliminar
                                    </p>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
