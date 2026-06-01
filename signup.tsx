import { ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/screen-container';

export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      return;
    }

    setLoading(true);
    try {
      // Simular cadastro
      setTimeout(() => {
        Alert.alert('Sucesso', 'Conta criada com sucesso! Faça login para continuar');
        router.replace('/login');
        setLoading(false);
      }, 1000);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao criar conta');
      setLoading(false);
    }
  };

  return (
    <ScreenContainer className="bg-background" edges={['top', 'left', 'right', 'bottom']}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6">
        <View className="flex-1 justify-center gap-6">
          {/* Header */}
          <View className="items-center gap-2">
            <Text className="text-3xl font-bold text-foreground">Criar Conta</Text>
            <Text className="text-sm text-muted">Junte-se ao Urban Express</Text>
          </View>

          {/* Formulário */}
          <View className="gap-4">
            {/* Name Input */}
            <View className="gap-2">
              <Text className="text-sm font-semibold text-foreground">Nome Completo</Text>
              <TextInput
                className="border border-border rounded-lg px-4 py-3 text-foreground bg-surface"
                placeholder="Seu nome"
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName}
                editable={!loading}
              />
            </View>

            {/* Email Input */}
            <View className="gap-2">
              <Text className="text-sm font-semibold text-foreground">Email</Text>
              <TextInput
                className="border border-border rounded-lg px-4 py-3 text-foreground bg-surface"
                placeholder="seu@email.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                editable={!loading}
              />
            </View>

            {/* Password Input */}
            <View className="gap-2">
              <Text className="text-sm font-semibold text-foreground">Senha</Text>
              <TextInput
                className="border border-border rounded-lg px-4 py-3 text-foreground bg-surface"
                placeholder="••••••••"
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                editable={!loading}
              />
            </View>

            {/* Confirm Password Input */}
            <View className="gap-2">
              <Text className="text-sm font-semibold text-foreground">Confirmar Senha</Text>
              <TextInput
                className="border border-border rounded-lg px-4 py-3 text-foreground bg-surface"
                placeholder="••••••••"
                placeholderTextColor="#999"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                editable={!loading}
              />
            </View>

            {/* Botão Cadastrar */}
            <TouchableOpacity
              className="bg-primary rounded-lg py-3 items-center mt-2 active:opacity-80"
              onPress={handleSignup}
              disabled={loading}
            >
              <Text className="text-white font-semibold text-base">
                {loading ? 'Criando conta...' : 'Cadastrar'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Link para Login */}
          <View className="items-center">
            <TouchableOpacity onPress={() => router.push('/login')}>
              <Text className="text-muted text-sm">
                Já tem conta? <Text className="text-primary font-semibold">Faça login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
