import { ScrollView, Text, TouchableOpacity, View, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/screen-container';

export default function AboutScreen() {
  const router = useRouter();

  const handleOpenLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScreenContainer className="bg-background" edges={['top', 'left', 'right', 'bottom']}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6">
        <View className="flex-1 gap-6 py-6">
          {/* Header */}
          <View className="items-center gap-3">
            <View className="w-24 h-24 bg-primary rounded-full items-center justify-center">
              <Text className="text-4xl font-bold text-white">UE</Text>
            </View>
            <Text className="text-3xl font-bold text-foreground">Urban Express</Text>
            <Text className="text-sm text-muted">Versão 1.0.0</Text>
          </View>

          {/* Descrição */}
          <View className="bg-surface rounded-lg p-4 gap-3">
            <Text className="text-lg font-semibold text-foreground">Sobre o App</Text>
            <Text className="text-sm text-muted leading-relaxed">
              Urban Express é um aplicativo de entrega rápida de alimentos frescos. Conectamos você aos melhores restaurantes e lanchonetes da sua cidade.
            </Text>
          </View>

          {/* Informações */}
          <View className="gap-3">
            <View className="bg-surface rounded-lg p-4">
              <Text className="text-sm font-semibold text-foreground mb-2">Contato</Text>
              <Text className="text-sm text-muted">Email: contato@urbanexpress.com</Text>
              <Text className="text-sm text-muted">Telefone: (11) 9999-9999</Text>
            </View>

            <View className="bg-surface rounded-lg p-4">
              <Text className="text-sm font-semibold text-foreground mb-2">Localização</Text>
              <Text className="text-sm text-muted">São Paulo, SP - Brasil</Text>
            </View>
          </View>

          {/* Links de Políticas */}
          <View className="gap-2">
            <TouchableOpacity
              className="bg-surface rounded-lg p-4 active:opacity-80"
              onPress={() => handleOpenLink('https://example.com/privacy')}
            >
              <Text className="text-primary font-semibold">Política de Privacidade</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-surface rounded-lg p-4 active:opacity-80"
              onPress={() => handleOpenLink('https://example.com/terms')}
            >
              <Text className="text-primary font-semibold">Termos de Uso</Text>
            </TouchableOpacity>
          </View>

          {/* Créditos */}
          <View className="bg-surface rounded-lg p-4">
            <Text className="text-sm font-semibold text-foreground mb-2">Desenvolvido por</Text>
            <Text className="text-sm text-muted">Urban Express Team</Text>
            <Text className="text-xs text-muted mt-2">© 2026 Urban Express. Todos os direitos reservados.</Text>
          </View>

          {/* Botão Voltar */}
          <TouchableOpacity
            className="bg-primary rounded-lg py-3 items-center active:opacity-80"
            onPress={() => router.back()}
          >
            <Text className="text-white font-semibold">Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
