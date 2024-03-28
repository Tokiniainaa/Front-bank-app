import { Box } from "@chakra-ui/react"
import ProfilDefault from "./Profil/ProfilDefault"
import Profil from "./Profil/Profil"

const ReceveirProfil = ({ receiver }) => {
    
    return(
        <Box w="35%" h="100%" p={4}>
            {receiver ? (
                <Profil receiver={receiver}/>
            ) : <ProfilDefault />}
        </Box>
    )
}
export default ReceveirProfil;