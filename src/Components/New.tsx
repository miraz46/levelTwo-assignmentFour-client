import { decrement, increment } from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./Hook/hook";


const New = () => {

    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold mb-4">Counter App</h2>
                    <div className="flex items-center gap-5">
                        <button
                            className="btn btn-outline btn-error"
                            onClick={() => dispatch(decrement())}
                            aria-label="Decrement value"
                        >
                            −
                        </button>
                        <span className="text-3xl font-bold w-12 text-center">{count}</span>
                        <button
                            className="btn btn-outline btn-success"
                            onClick={() => dispatch(increment())}
                            aria-label="Increment value"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;