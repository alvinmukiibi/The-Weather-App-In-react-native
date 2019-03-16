import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
import axios from "axios";


class AlbumList extends Component {

    componentWillMount() {
        $authToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg2ZDRiZDU0N2E1Y2MyM2I2OTMyNGM3NzU4YTFlMzc4MjBlOGUwNTVhMDQ1MmU1ZDQ1NjBkMDc4YWI0Nzg2M2VlYmFhNDlmZDVlNjE0NjQyIn0.eyJhdWQiOiIxIiwianRpIjoiODZkNGJkNTQ3YTVjYzIzYjY5MzI0Yzc3NThhMWUzNzgyMGU4ZTA1NWEwNDUyZTVkNDU2MGQwNzhhYjQ3ODYzZWViYWE0OWZkNWU2MTQ2NDIiLCJpYXQiOjE1NTI0ODM2MzYsIm5iZiI6MTU1MjQ4MzYzNiwiZXhwIjoxNTg0MTA2MDM2LCJzdWIiOiIxMyIsInNjb3BlcyI6W119.TUf-yfETGkmObAe2IThBSEhmBcbCyuRcDZDxVmg23NEMxqbiOEmqY0TOhIfp_86hr76zhtZnT93Ay3wXb2DNblkgvzKl3mmzIpfIv980gwui6AdefJnAy_JgibKDoj9Hzp07R3khrlM8xG-L9boiy0Ta8uBGHYAwW8znGekCYgAwdEczZXJDEhUzoK4rAL4r9YyGI0l05kFeH-55-C0aLNmTfoYk_AMU_19Ce_85sOPp1MV8r_PQqEtJpxqdL0yO4VVR9kG87vdfNUr4eC7kNldptdmti2fct6gkKqXG2ChxroPGBvL1oxn-EZokm9wymo5iCHWziw5nrgzJAKPb39WEuFUSu6d5PImuqo7DzexiF4NTi6Ktfrd2Zj9JygsBamenIHu67l6_ByZ0ZwRv_1Y50RAh8KSaC1XpilDdGc8sQXSZDhNClrNiR3zFQ9m-oDwnN8gZYReNA27VV6LaZVTDKd9VVibViLPRZ3IdgrWDsd6jj0m68CnDzrgToK_TJHQkxmfTFV-lFuVrvN1wQUTANUUYQ7b5YN-9_uynLyoR06Qd7RBCnkD35ntE64g_np0EOmBMBicDluQyAG546aGRwbxtg5HTUjZW22Qg1-prDj08sWVTszsNognX-av0WUrtEYgWltavtsSyZ_vZtR9_gLHpfL6jVqDD0GZN1qg";
        // make an HTTP request
        // axios.get("http://127.0.0.1:8000/api/user", {
        //     headers: {
        //         Authorization: `Bearer ${$authToken}`,
        //         Accept: "application/json"
        //     }
        // })
        //     .then(res => {
        //         console.warn("res");
        //     }).catch(error => {
        //         console.warn(error);
        //     })
    }

    render() {
        return (
            <View>
                <Text>Nulla volutpat lobortis dignissim primis malesuada tempore,</Text>

            </View>
        );
    }
}

export default AlbumList;