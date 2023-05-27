<tbody>
                {state.cart.map((a,i) => (
                 <tr key = {i}>
                    <td>{i+1}</td>
                    <td>{state.cart[i].name}</td>
                    <td>{state.cart[i].count}</td>
                    <td>
                        <button onClick = {() => {
                            console.log(state.cart[i].id)
                            dispatch(increase(state.cart[i].id))
                        }}>+</button>
                    </td>
                </tr>                   
                ))}
            </tbody>
