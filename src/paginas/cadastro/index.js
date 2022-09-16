import { Text,View } from "react-native";


export default function Cadastrar(){
    return(
        <View>
            <Text> CADASTRAR ALUNO </Text>
            <form>
            <label>
                Nome:
            <input type="text" name="name" />
            </label>
            </form>

            <br/>

            <form>
            <label>
                Nota 1:
            <input type="number" name="nota1" />
            </label>
            </form>

            <br/>

            <form>
            <label>
                Nota 2:
            <input type="number" name="nota2" />
            </label>
            </form>

            <br/>

            <form>
            <label>
                Nota 3:
            <input type="number" name="nota3" />
            </label>
            </form>

            <br/>

            <form>
            <label>
                Imagem:
            <input type="" name="imagem" />
            </label>

            <br />
            <br />

            <input type="submit" value="Enviar" />
            </form>

    
        </View>
    );
}