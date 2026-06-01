import { ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/screen-container';
import { Image } from 'expo-image';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      // Simular autenticação
      setTimeout(() => {
        if (email && password.length >= 6) {
          // Armazenar dados do usuário
          router.replace('/(tabs)');
        } else {
          Alert.alert('Erro', 'Email ou senha inválidos');
        }
        setLoading(false);
      }, 1000);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao fazer login');
      setLoading(false);
    }
  };

  return (
    <ScreenContainer className="bg-background" edges={['top', 'left', 'right', 'bottom']}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6">
        <View className="flex-1 justify-center gap-8">
          {/* Logo */}
          <View className="items-center gap-3">
            <View className="w-20 h-20 bg-primary rounded-full items-center justify-center">
              <Text className="text-3xl font-bold text-white">UE</Text>
            </View>
            <Text className="text-3xl font-bold text-foreground">Urban Express</Text>
            <Text className="text-sm text-muted">Entrega rápida de alimentos</Text>
          </View>

          {/* Formulário */}
          <View className="gap-4">
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

            {/* Botão Login */}
            <TouchableOpacity
              className="bg-primary rounded-lg py-3 items-center mt-2 active:opacity-80"
              onPress={handleLogin}
              disabled={loading}
            >
              <Text className="text-white font-semibold text-base">
                {loading ? 'Entrando...' : 'Entrar'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Links */}
          <View className="gap-3 items-center">
            <TouchableOpacity onPress={() => router.push('/signup')}>
              <Text className="text-primary font-semibold">
                Não tem conta? <Text className="text-primary underline">Cadastre-se</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-muted text-sm">Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
