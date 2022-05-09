using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using FYI.web.Api.Domains;
using Microsoft.Extensions.Configuration;

#nullable disable

namespace FYI.web.Api.Contexts
{
    public partial class FYIContext : DbContext
    {
        public FYIContext()
        {
        }

        public FYIContext(DbContextOptions<FYIContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CategoriumDomain> Categoria { get; set; }
        public virtual DbSet<CursoDomain> Cursos { get; set; }
        public virtual DbSet<InscricaoDomain> Inscricaos { get; set; }
        public virtual DbSet<TipoUsuarioDomain> TipoUsuarios { get; set; }
        public virtual DbSet<TurmaDomain> Turmas { get; set; }
        public virtual DbSet<UsuarioDomain> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                 .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                 .AddJsonFile("appsettings.json")
                 .Build();
                // Pc do Senai
                optionsBuilder.UseSqlServer(configuration.GetConnectionString("DBFYI"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<CategoriumDomain>(entity =>
            {
                entity.HasKey(e => e.IdCategoria)
                    .HasName("PK__categori__8A3D240C61A1D605");

                entity.ToTable("categoria");

                entity.Property(e => e.IdCategoria)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("idCategoria");

                entity.Property(e => e.Titulo)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("titulo");
            });

            modelBuilder.Entity<CursoDomain>(entity =>
            {
                entity.HasKey(e => e.IdCurso)
                    .HasName("PK__curso__8551ED0590ECA5CC");

                entity.ToTable("curso");

                entity.Property(e => e.IdCurso)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("idCurso");

                entity.Property(e => e.CargaHoraria).HasColumnName("cargaHoraria");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(2048)
                    .IsUnicode(false)
                    .HasColumnName("descricao");

                entity.Property(e => e.IdCategoria).HasColumnName("idCategoria");

                entity.Property(e => e.NomeCurso)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nomeCurso");

                entity.Property(e => e.VagasDisponiveis).HasColumnName("vagasDisponiveis");

                entity.Property(e => e.VagasPreenchidas).HasColumnName("vagasPreenchidas");

                entity.Property(e => e.Imagem)
                    .IsRequired()
                    .HasMaxLength(74)
                    .IsUnicode(false)
                    .HasColumnName("Imagem");

                entity.HasOne(d => d.IdCategoriaNavigation)
                    .WithMany(p => p.Cursos)
                    .HasForeignKey(d => d.IdCategoria)
                    .HasConstraintName("FK__curso__idCategor__6FE99F9F");
            });

            modelBuilder.Entity<InscricaoDomain>(entity =>
            {
                entity.HasKey(e => e.IdInscricao)
                    .HasName("PK__inscrica__CB2B18FEB4BE5D81");

                entity.ToTable("inscricao");

                entity.Property(e => e.IdInscricao).HasColumnName("idInscricao");

                entity.Property(e => e.DataInscricao)
                    .HasColumnType("date")
                    .HasColumnName("dataInscricao");

                entity.Property(e => e.IdTurma).HasColumnName("idTurma");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.HasOne(d => d.IdTurmaNavigation)
                    .WithMany(p => p.Inscricaos)
                    .HasForeignKey(d => d.IdTurma)
                    .HasConstraintName("FK__inscricao__idTur__6754599E");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Inscricaos)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__inscricao__idUsu__66603565");
            });

            modelBuilder.Entity<TipoUsuarioDomain>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__tipoUsua__03006BFF9930EA79");

                entity.ToTable("tipoUsuario");

                entity.Property(e => e.IdTipoUsuario)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("idTipoUsuario");

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasMaxLength(13)
                    .IsUnicode(false)
                    .HasColumnName("titulo");
            });

            modelBuilder.Entity<TurmaDomain>(entity =>
            {
                entity.HasKey(e => e.IdTurma)
                    .HasName("PK__turma__AA068310446CBE3B");

                entity.ToTable("turma");

                entity.Property(e => e.IdTurma)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("idTurma");

                entity.Property(e => e.IdCurso).HasColumnName("idCurso");

                entity.Property(e => e.NomeTurma)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("nomeTurma");

                entity.HasOne(d => d.IdCursoNavigation)
                    .WithMany(p => p.Turmas)
                    .HasForeignKey(d => d.IdCurso)
                    .HasConstraintName("FK__turma__idCurso__6383C8BA");
            });

            modelBuilder.Entity<UsuarioDomain>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__usuario__645723A636CAE19F");

                entity.ToTable("usuario");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(266)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Empresa)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("empresa");

                entity.Property(e => e.IdTipoUsuario).HasColumnName("idTipoUsuario");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("senha");

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__usuario__idTipoU__5EBF139D");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
