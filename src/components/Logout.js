import React, { useState } from "react";
import Loader from "react-loader-spinner";

const Logout = () => {
    const [loading, setLoading] = useState(true);

    return (
        <React.Fragment>
            <div>
                {loading ? (
                    <div
                        style={{
                            margin: "auto",
                            display: "flex",
                            position: "absolute",
                            top: "calc(50% - 50px)",
                            left: "calc(50% - 50px)",
                        }}
                    >
                        <Loader
                            color="#00BFFF"
                            type="Rings"
                            height={200}
                            width={200}
                            timeout={3000}
                        />
                    </div>
                ) : (
                    setLoading(true)
                )}
                ;
            </div>
        </React.Fragment>
    );
};

export default Logout;
