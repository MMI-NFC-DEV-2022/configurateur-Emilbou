export interface SchemaQuartier {
quartier_commune: {
        Row: {
          commune_id: number | null
          nom_quartier: string | null
          nomCommune: string | null
          quartier_id: number | null
        }
        Relationships: []
      }
}


export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agent: {
        Row: {
          created_at: string
          id: number
          id_maison: number | null
          id_user: string | null
          nom_agent: string | null
          prenom_agent: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_maison?: number | null
          id_user?: string | null
          nom_agent?: string | null
          prenom_agent?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_maison?: number | null
          id_user?: string | null
          nom_agent?: string | null
          prenom_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_agent_id_maison_fkey"
            columns: ["id_maison"]
            isOneToOne: false
            referencedRelation: "Maisons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_agent_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      commune: {
        Row: {
          created_at: string
          id: number
          nomCommune: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          nomCommune?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          nomCommune?: string | null
        }
        Relationships: []
      }
      Maisons: {
        Row: {
          adresse: string | null
          created_at: string
          favori: boolean | null
          id: number
          id_agent: number | null
          image: string | null
          nbrChambres: number | null
          nbrSDB: number | null
          nomMaison: string | null
          prix: string | null
          surface: string | null
        }
        Insert: {
          adresse?: string | null
          created_at?: string
          favori?: boolean | null
          id?: number
          id_agent?: number | null
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string | null
          prix?: string | null
          surface?: string | null
        }
        Update: {
          adresse?: string | null
          created_at?: string
          favori?: boolean | null
          id?: number
          id_agent?: number | null
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string | null
          prix?: string | null
          surface?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Maisons_id_agent_fkey"
            columns: ["id_agent"]
            isOneToOne: false
            referencedRelation: "Maisons"
            referencedColumns: ["id"]
          }
        ]
      }
      quartier: {
        Row: {
          created_at: string
          id: number
          id_commune: number | null
          nom_quartier: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_commune?: number | null
          nom_quartier?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_commune?: number | null
          nom_quartier?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_quartier_id_commune_fkey"
            columns: ["id_commune"]
            isOneToOne: false
            referencedRelation: "commune"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_quartier_id_commune_fkey"
            columns: ["id_commune"]
            isOneToOne: false
            referencedRelation: "quartier_commune"
            referencedColumns: ["commune_id"]
          }
        ]
      }
    }
    Views: {
      quartier_commune: {
        Row: {
          commune_id: number | null
          nom_quartier: string | null
          nomCommune: string | null
          quartier_id: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
